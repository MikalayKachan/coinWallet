
const SET_COINS = "SET_COINS"

type SetCoinsActionType = { type: typeof SET_COINS, coinsData: Array<CoinInfoType> }

export type CoinInfoType = {
    id: string | null
    rank: string | null
    symbol: string | null
    name: string | null
    supply: string | null
    maxSupply: string | null
    marketCapUsd: string | null
    volumeUsd24Hr: string | null
    priceUsd: string | null
    changePercent24Hr: string | null
    vwap24Hr: string | null
    explorer: string | null
}

export type WalletStateType = {
    id: string | null
    symbol: string | null
    name: string | null
    priceUsd: string | null
}
export type HeaderStateType = {
    coinsData: Array<CoinInfoType>
    walletState: Array<WalletStateType>
}

let initialState = {
    coinsData: [],
    walletState:[]
}

const headerReducer = (headerState: HeaderStateType = initialState, action: SetCoinsActionType): HeaderStateType => {
    switch (action.type) {
        case SET_COINS: 
            return { ...headerState, coinsData: action.coinsData }
        default:
            return headerState
    }
}

export const setCoinsAC = (coinsData: Array<CoinInfoType>) => ({ type: SET_COINS, coinsData: coinsData })


export default headerReducer