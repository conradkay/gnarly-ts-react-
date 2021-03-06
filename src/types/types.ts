import { MapStateToProps } from 'react-redux'

import { TState } from './state'

export type TAuthType = 'Register' | 'Login'
export type MSProps<StateProps> = MapStateToProps<StateProps, {}, TState>
