import MultipleCounters from './MultipleCounters'

export default function WrapMultipleCounters () {
  return {
    initialState: {
      multiplechildButtonClicked: 0
    },
    actions: function (sources) {
      return [
        sources.childrenActions
          .filterByType('childButtonClicked')
          .mapTo({ type: 'multipleChildButtonClicked' })
      ]
    },
    reducers: function (sources) {
      return [
        sources.actions
          .filterByType('multipleChildButtonClicked')
          .reducer(function (state) {
            state.multiplechildButtonClicked++
            return state
          })
      ]
    },
    view: function (jsx, props, state) {
      return (
        <div>
          <ul>
            <li><MultipleCounters key='1' /></li>
            <li><MultipleCounters key='2' /></li>
            <li><MultipleCounters key='3' /></li>
          </ul>
          <div className='message'>
            Total multiple child button clicks: {state.multiplechildButtonClicked}
          </div>
        </div>
      )
    }
  }
}
