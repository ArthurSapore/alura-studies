import styled from "styled-components";

/**
 * É necessário que a propriedade tenha o $ para o styled components
 * reconhecer que é uma propriedade de estilo.
 */
interface Props {
    $ativo: boolean;
}

export const StylizedItem  = styled.li<Props> `
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 22px;

    a{
       text-decoration :none ;
       color: ${(Props) => Props.$ativo ? '#7B78E5' : '#D9D9D9'};
       font-family: ${(Props) => Props.$ativo ? 'GandhiSansBold' : 'GandhiSansRegular'};
    }

`