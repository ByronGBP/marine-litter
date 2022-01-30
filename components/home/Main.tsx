import styled from 'styled-components'
import { getRelative, createGrid, getP120, getP45, getP120S, getTransition } from '@/styles'
import { motion, useViewportScroll, useTransform } from 'framer-motion'

const _Main = styled.main`
  ${createGrid()}
  position: relative;
  background-color: transparent;
  padding: ${getRelative(150, 'desktop')} 0;

  h2 {
    grid-column: span 12;
    ${getP120()}
    color: ${({ theme }) => theme.colors.yellow};
    margin-bottom: ${getRelative(50, 'desktop')};
  } 

  .steps, svg {
    grid-area: 2 / 1 / span 1 / span 12;
  }

  svg {
    width: 100%;
    height: 100%;
    pointer-events: none;
    user-select: none;
  }

  .steps {
    padding-top: ${getRelative(50, 'desktop')};
  }

  .step {
    ${createGrid()}
    grid-column: span 12;
    padding: ${getRelative(150, 'desktop')} 0;

    p {
      ${getP45()}
      text-align: center;
      color: ${({ theme }) => theme.colors.white};
      padding: 0 ${getRelative(35, 'desktop')};
    }

    b {
      color: ${({ theme }) => theme.colors.yellow};
    }

    p {
      grid-column: 4 / span 6;
    }

    span {
      ${getP120S()}
      font-weight: normal;
      grid-column: 2 / span 1;
      justify-self: center;
      align-self: center;
      font-family: 'Georgia';
      color: ${({ theme }) => theme.colors.yellow};
    }

    &.impar {
      span {
        grid-area: 1 / 11 / span 1 / span 1;
      }
    }
  }

  figure {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`

const SVGLine = () => {
  const { scrollYProgress } = useViewportScroll()
  const parsedValue = useTransform(scrollYProgress, [0, .15, .15, 1], [0, 0, 0, 1])
  return (
    <svg width="1437px" height="1677px" viewBox="0 0 1437 1677">
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="square">
          <g id="Desktop-HD" transform="translate(-4.000000, -1243.000000)" stroke="#FFFFFF" strokeWidth="2">
            <g id="Group-2" transform="translate(4.500000, 1050.000000)">
              <g id="Group" transform="translate(0.000000, -0.000000)">
                <g id="Group-3" transform="translate(0.000000, 193.000000)">
                  <motion.path style={{ pathLength: parsedValue }} d="M715.5,1.93259527 L715.5,13 C715.5,35.09139 733.40861,53 755.5,53 L1097.5,53 C1119.59139,53 1137.5,70.90861 1137.5,93 L1137.5,513.091749 C1137.5,535.145987 1119.64933,553.03917 1097.59516,553.091636 L336.693732,554.901774 C314.639556,554.954239 296.788889,572.847423 296.788889,594.90166 L296.788889,1016 C296.788889,1038.09139 314.697499,1056 336.788889,1056 L1098.78889,1056 C1120.88028,1056 1138.78889,1073.90861 1138.78889,1096 L1138.78889,1516 C1138.78889,1538.09139 1120.88028,1556 1098.78889,1556 L755.5,1556 C733.40861,1556 715.5,1573.90861 715.5,1596 L715.5,1676 L715.5,1676" id="Line"></motion.path>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}

const variants = {
  onView: {
    opacity: 1,
    y: '0px',
    transition: {
      ...getTransition()
    }
  },
  offView: {
    opacity: 0,
    y: '20px',
    transition: {
      ...getTransition()
    }
  },
}

const Step =  ({ children, ...rest }: React.PropsWithChildren<any>) => {
  return (
  <motion.div {...rest} variants={variants} initial={'offView'} whileInView={'onView'} viewport={{ once: false, amount: 0.8 }}>
    {children}
  </motion.div>
  )
}

export const Main = () => {
  return <_Main>
    <motion.h2 variants={variants} initial={'offView'} whileInView={'onView'} viewport={{ once: true, amount: 0.8 }}>RESEARCH</motion.h2>
    <div className='steps'>
      <Step className='step impar'>
        <span>1</span>
        <p><b>Analysis</b> of preparation of a growntruth <b>marine litter</b> database matching satellite data image acquisitions</p>
      </Step>
      <Step className='step par'>
        <span>2</span>
        <p><b>Processing</b> of large volumes of <b>SAR images</b> and the creation of an AI-based predicting model</p>
      </Step>
      <Step className='step impar'>
        <span>3</span>
        <p><b>Validation</b> and model operations, first in the Balearic Islands, and generalisation <b>worldwide</b></p>
      </Step>
    </div>
    <SVGLine/>
    <figure>
      <picture>
        <source srcSet="/images/bg.webp" />
        <img src="/images/bg.png" alt="Background steps" />
      </picture>
    </figure>
  </_Main>
}