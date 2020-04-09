import { useDispatch, useSelector } from 'react-redux'
import {
  chainxNodesDelaySelector,
  chainxNodesSelector,
  currentChainxNodeSelector
} from '../../store/reducers/nodeSlice'
import Icon from '../../components/Icon'
import React from 'react'
import { setShowNodeMenu } from '../../store/reducers/statusSlice'
import Delay from './Delay'
import { paths } from '../../constants'
import styled from 'styled-components'

const IconWrapper = styled.span`
  color: #f6c94a;
  margin-left: 3px;

  & > i {
    font-size: 12px;
  }
`

const FlagPlaceHolder = styled.div`
  width: 3px;
  height: 100%;
  border-radius: 1.5px;
`

const ActiveFlag = styled(FlagPlaceHolder)`
  background-color: #f6c94a;
`

export default function({ history, setNode }) {
  const nodeList = useSelector(chainxNodesSelector)
  const currentNode = useSelector(currentChainxNodeSelector)
  const nodesDelay = useSelector(chainxNodesDelaySelector)
  const dispatch = useDispatch()

  return (nodeList || []).map((item, index) => (
    <div
      className="node-item"
      style={item.url === currentNode.url ? { backgroundColor: '#F2F3F4' } : {}}
      key={index}
      onClick={() => {
        setNode(item.url)
      }}
    >
      {item.url === currentNode.url ? <ActiveFlag /> : <FlagPlaceHolder />}
      <div className="node-item-detail">
        <div className="node-item-detail-url">
          <span className="url">{item.url.split('//')[1] || item.url}</span>
          {!item.isInit && (
            <IconWrapper
              onClick={e => {
                e.stopPropagation()
                e.nativeEvent.stopImmediatePropagation()
                dispatch(setShowNodeMenu(false))
                history.push({
                  pathname: paths.removeNode,
                  query: { url: item.url }
                })
              }}
            >
              <Icon name="Edit" />
            </IconWrapper>
          )}
        </div>
        <Delay delay={nodesDelay[item.url]} />
      </div>
    </div>
  ))
}
