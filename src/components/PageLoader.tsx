import React from 'react'
import { Segment, Dimmer, Loader } from 'semantic-ui-react'
import styled from 'styled-components'

const StyledSegment = styled(Segment)`
  height: 100vh;
`

export const PageLoader = () => (
  <StyledSegment>
    <Dimmer active>
      <Loader content="Loading" />
    </Dimmer>
  </StyledSegment>
)
