import styled from 'styled-components'
import { getP120 } from '@/styles'
import { motion } from 'framer-motion'

const _Header = styled.header`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black};

  h1 {
    ${getP120()}
    color: ${({ theme }) => theme.colors.white};

    b {
      display: block;
      color: ${({ theme }) => theme.colors.yellow};
    }
  }
`

export const Header = () => {
  return <_Header>
    <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} >Marine Litter <b>Signatures</b> </motion.h1>
  </_Header>
}