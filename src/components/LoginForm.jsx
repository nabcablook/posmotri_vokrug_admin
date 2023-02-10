import React from "react";
import { Button, FormItem, FormLayout, Group, Input, Panel, View } from "@vkontakte/vkui";

function LoginForm() {
    const [email, setEmail] = React.useState('');

    

    const onChange = (e) => {
        const value = e.currentTarget;
        const setStateAction = {
            email: setEmail,
           
        }
        setStateAction && setStateAction(value);
    };

    
    return(
        <View activePanel="user">
            <Panel id="login-form">
                <Group>
                    <FormLayout>
                        <FormItem
                        top="Email"
                        status={email ? 'valid' : 'error'}
                        bottom={
                            email ? '' : 'Пожалуйста введите электронную почту'
                        }
                        >
                            <Input type="email" name="email" value={email} onChange={onChange} />
                        </FormItem>
                        <FormItem top="Пароль">
                            <Input type="password" placeholder="Введите пароль" />
                        </FormItem>
                        <FormItem>
                            <Button size="m">
                                Войти
                            </Button>
                        </FormItem>
                    </FormLayout>
                </Group>
            </Panel>
        </View>
        
    );
}

export default LoginForm