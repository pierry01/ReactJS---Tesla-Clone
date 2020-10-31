import React from 'react'
import DefaultOverlayContent from '../DefaultOverlayContent'
import { Container, Spacer } from './styles'
import { ModelsWrapper, ModelSection } from '../Model'
import UniqueOverlay from '../UniqueOverlay'

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {
            [
              { 
                id: 1, 
                name: 'Model S', 
                description: 'Starting at $69,420', 
                img: '/images/Model S.png'
              },
              { 
                id: 2, 
                name: 'Model 3', 
                description: 'Order Online for Touchless Delivery', 
                img: '/images/Model 3.png'
              },
              { 
                id: 3, 
                name: 'Model X', 
                description: 'Order Online for Touchless Delivery', 
                img: '/images/Model X.png'
              },
              { 
                id: 4, 
                name: 'Model Y', 
                description: 'Order Online for Touchless Delivery', 
                img: '/images/Model Y.png'
              },
              { 
                id: 5, 
                name: 'Only $1.49/Watt for Solar on Existing Roofs', 
                description: 'Lowest Cost in America - Money-back guarantee', 
                img: '/images/Home.png'
              },
              { 
                id: 6, 
                name: 'Solar for New Roofs', 
                description: 'Solar Roof Costs Less Than a New Roof Plus Solar Panels', 
                img: '/images/Solar.png'
              },
              { 
                id: 7, 
                name: 'Accessories', 
                description: '', 
                img: '/images/Acessory.png'
              }
            ].map((modelName, key) => (
              <ModelSection
                key={key}
                className='colored'
                modelName={modelName.name}
                img={modelName.img}
                overlayNode={
                  <DefaultOverlayContent
                    label={modelName.name}
                    description={modelName.description}
                  />
                }
              />
            ))
          }
        </div>

        <Spacer />

        <UniqueOverlay />
      </ModelsWrapper>
    </Container>
  )
}

export default Page
