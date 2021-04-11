import styled from 'styled-components';

export const Label = styled.label<{size?:number, color?:string, bold?:boolean}>`
    font-size: ${props => (props.size || 18)}px;
    color: ${props => (props.color || 'black')};
    font-weight: ${props => (props.bold ? 'bold' : 'normal')};
    margin: 15px 40px;
`
export const Select = styled.select`
    font-size: 18px;
    color: gray;
    margin: 15px 10px;
    width: 180px;
`
export const TextBox = styled.input`
    font-size: 16px;
    margin: 15px 0;
`
export const BaseDiv = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
`
export const Container = styled(BaseDiv)`
    font-family: Arial;
    background-color: #DDDDDD;
    min-height: 100vh;
`
