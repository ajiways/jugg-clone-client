import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
   emitLogin,
   emitRegister,
   initSocket,
} from "../../store/reducers/ActionCreators";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import styles from "./Main.module.css";
import { Modal } from "../UI";
import { UserCredentials } from "../../models/user.model";
import MainPanel from "./MainPanel";
import BottomPanel from "./BottomPanel";

const Main = () => {
   const dispatch = useAppDispatch();
   const { user } = useAppSelector((state) => state.userReducer);
   const [loginModal, setLoginModal] = useState(false);
   const [registerModal, setRegisterModal] = useState(false);
   const [inputs, setInputs] = useState<UserCredentials>({
      login: "",
      password: "",
   });

   useEffect(() => {
      dispatch(initSocket());
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <div className={styles.main}>
         {user ? (
            <>
               <>
                  <LeftPanel />
                  <MainPanel className={styles.window} />
                  <RightPanel />
               </>
               <BottomPanel />
            </>
         ) : (
            <>
               <button onClick={() => setLoginModal(true)}>Войти</button>
               <button onClick={() => setRegisterModal(true)}>
                  Регистрация
               </button>
            </>
         )}
         <Modal visible={loginModal} setVisible={setLoginModal}>
            <div>Логин</div>
            <input
               onChange={(e) =>
                  setInputs((prevState) => {
                     return { ...prevState, login: e.target.value };
                  })
               }
               value={inputs.login}
               type="text"
               placeholder="Логин"
            />
            <input
               onChange={(e) =>
                  setInputs((prevState) => {
                     return { ...prevState, password: e.target.value };
                  })
               }
               value={inputs.password}
               type="password"
               placeholder="Пароль"
            />
            <button
               onClick={() => {
                  emitLogin(inputs);
                  setInputs({ login: "", password: "" });
               }}
            >
               Войти
            </button>
         </Modal>
         <Modal visible={registerModal} setVisible={setRegisterModal}>
            <div>Регистрация</div>
            <input
               onChange={(e) =>
                  setInputs((prevState) => {
                     return { ...prevState, login: e.target.value };
                  })
               }
               value={inputs.login}
               type="text"
               placeholder="Логин"
            />
            <input
               onChange={(e) =>
                  setInputs((prevState) => {
                     return { ...prevState, password: e.target.value };
                  })
               }
               value={inputs.password}
               type="password"
               placeholder="Пароль"
            />
            <button
               onClick={() => {
                  emitRegister(inputs);
                  setInputs({ login: "", password: "" });
               }}
            >
               Зарегаться
            </button>
         </Modal>
      </div>
   );
};

export default Main;
