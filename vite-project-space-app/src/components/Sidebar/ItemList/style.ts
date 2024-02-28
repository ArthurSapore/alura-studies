import styled from "styled-components";


interface Props {
    ativo: boolean;
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
       color: ${(Props) => Props.ativo ? '#7B78E5' : '#D9D9D9'};
    }

`