import React from "react";
import {
    SplitLayout, 
    SplitCol, 
    Button, 
    FormItem, 
    FormLayout, 
    Group, 
    Input, 
    Panel, 
    View, 
    usePlatform,
    useAdaptivityConditionalRender,
    ModalRoot,
    ModalPage,
    ModalPageHeader,
    CellButton,
    Platform,
    PanelHeader,
    Cell,
    Separator,
    Alert,
    Avatar,
    Placeholder,
    
 } from "@vkontakte/vkui";
import LoginForm from "../components/LoginForm"; 

import '../styles/login.css'
   


function Login() {
    
    const Example = () => {
      const platform = usePlatform();
      const { viewWidth } = useAdaptivityConditionalRender();
    
      const isVKCOM = platform === Platform.VKCOM;
    
      return (
        <SplitLayout
          style={{ justifyContent: 'center', alignItems: 'center'}}
          header={!isVKCOM && <PanelHeader separator={false} />}
          
        >
          {viewWidth.tabletPlus && (
            <SplitCol className={`viewWidth.tabletPlus.className `} fixed width={410} maxWidth={410} >
             <LoginForm />
            </SplitCol>
          )}
    
          </SplitLayout>
        
      );
      
    };
    return <Example />; 
}

//
export default Login