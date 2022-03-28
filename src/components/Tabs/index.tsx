import { useState } from "react";

import { Container, Buttons, Button, Content} from './styles'
export default function Tabs() {
    const [ select, setSelect] = useState('tab01');
    function handleSelected(tab: string) {
        setSelect('');
        setSelect(tab)
        if(select == 'tab01'){
            console.log('vc clicou no button 01')
        }
        if(select == 'tab02') {
            console.log('tab02')
        }
    }
    return (
        <Container>
            <Buttons>
                <Button onClick={() =>handleSelected('tab01')}>Tab 1</Button>
                <Button onClick={() =>handleSelected('tab02')}>Tab 2</Button>
            </Buttons>
            {select == 'tab01'? 
            <Content className="tab01">Texto da tab 01 </Content> 
            :
            <Content className="tab02">Texto da tab 02 </Content>}
        </Container>
    )
}