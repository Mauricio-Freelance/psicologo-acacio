import styled from "styled-components";


export const Container = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: #f0f0f0; /* Adicione um fundo para melhor visualização */
`

export const Slider = styled.div`
    margin: 0 auto;
    width: 800px;
    height: 400px;
    overflow: hidden;
    position: relative;
`

export const Slides = styled.div`
    /* width: 400%; /* cada 100% de width corresponde a 1 card */
    height: 400px;
    display: flex;
`

export const Radio = styled.input`
    display: inline-block;
`

export const Slide = styled.div`
    width: 800px; /* A largura do slide deve ser igual à largura do slider */
    height: 400px;
    position: relative;
`

export const NavigationAuto = styled.div`
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    gap: 20px;
    /* o navigation auto deixa o manual navigation ativo, basicamente */
`

export const AutoBtn = styled.div`
    border: 2px solid #20a6ff;
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;
    transition: 1s;
    /* basicamente, o AutoBtn deixa o ManualBtn ativo */
    /* podemos retira-lo e adicionar uma function no ManualBtn, para mudar a cor da borda ao ser ativado */
`

export const ManualNavigation = styled.div`
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    gap: 20px;
    /* creio que podemos retira-lo ao adicionar uma function no ManualBtn */
`

export const ManualBtn = styled.label`
    border: 2px solid #fff;
    padding: 5px;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.5s;
`

/*

Acredito que essa parte do codigo faz o card se mover 25% para a esquerda a cada card podemos utilizar uma function que mova cada card da sequencia 25% mais para a esquerda

#radio1:checked ~ .first {
    margin-left: 0;
    background-color: #fff;
}

#radio2:checked ~ .first {
    margin-left: -25%;
}

#radio3:checked ~ .first {
    margin-left: -50%;
}

#radio4:checked ~ .first {
    margin-left: -75%;
}
*/