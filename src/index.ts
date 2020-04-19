type Token = PlainToken

interface BaseToken<T extends string> {
  type: T
}

interface PlainToken extends BaseToken<'plain'> {
  text: string
}

export default (text: string): readonly Token[] => ([{type:'plain', text}])