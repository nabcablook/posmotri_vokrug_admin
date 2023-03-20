import React from "react";
import { Button, FormItem, FormLayout, Group, Input, Panel, View } from "@vkontakte/vkui";

function LoginForm() {
    const [email, setEmail] = React.useState('');

    

    const onChange = (e) => {
        const { value } = e.currentTarget;
        setEmail(value)
    };

    
    return(
        <View activePanel="login-form">
            <Panel id="login-form">
                <Group>
                    <FormLayout>
                        <FormItem
                        top="Email"
                        status={email ? 'valid' : 'error'}
                        >
                            <Input type="email" name="email" value={email} onChange={onChange} />
                        </FormItem>
                        <FormItem top="Пароль">
                            <Input type="password" placeholder="Введите пароль" />
                        </FormItem>
                        <FormItem>
                            <Button size="m" disabled={!email}>
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