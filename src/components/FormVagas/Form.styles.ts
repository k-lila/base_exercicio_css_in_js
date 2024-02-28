import styled from 'styled-components'

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
  input {
    padding: 0 16px;
    outline-color: var(--cor-principal);
  }
`
export default Form
