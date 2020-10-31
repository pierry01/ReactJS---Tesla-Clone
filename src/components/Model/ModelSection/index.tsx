import React, { useEffect, useRef } from 'react'
import { Container } from './styles'
import useModel from '../useModel'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  modelName: string
  overlayNode: React.ReactNode
  img: string
}

const ModelSection: React.FC<Props> = ({ 
  modelName, overlayNode, children, img, ...props
}) => {
  const { registerModel } = useModel(modelName)

  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if(sectionRef.current) {
      registerModel({ modelName, overlayNode, sectionRef })
    }
  }, [modelName, overlayNode, registerModel])

  return (
    <Container style={{ backgroundImage: `url('${img}')` }} ref={sectionRef} {...props}>
      {children}
    </Container>
  )
}

export default ModelSection
