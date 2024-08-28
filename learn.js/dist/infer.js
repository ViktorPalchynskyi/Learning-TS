"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.call = call;
function call(calledFunction) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  return calledFunction(...args);
}
function getProperty(obj, key) {
  return obj[key];
}
const result = call(getProperty, {
  a: 'asdf',
  b: 'azcv',
  c: 24
}, 'c');

// type RetrunType = FunctionReturn<typeof getProperty<Obj, 'a'>>

// type Constructor = new (...args: any[])

// const ButtonContainer: JSX.Element<Omit<GetComponentProps<typof Button>, 'title'>> = (props) => {
//     const title = useSelector((state) => selectByButtonTitle(state, userId));

//     return <Button  {...props} title={title}/>;
// }
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjYWxsIiwiY2FsbGVkRnVuY3Rpb24iLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImdldFByb3BlcnR5Iiwib2JqIiwia2V5IiwicmVzdWx0IiwiYSIsImIiLCJjIl0sInNvdXJjZXMiOlsiLi4vc3JjL2luZmVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGw8QXJncyBleHRlbmRzIGFueVtdLCBSZXR1cm5UeXBlPihcbiAgICBjYWxsZWRGdW5jdGlvbjogKC4uLmFyZ3M6IEFyZ3MpID0+IFJldHVyblR5cGUsXG4gICAgLi4uYXJnczogQXJnc1xuKTogUmV0dXJuVHlwZSB7XG4gICAgcmV0dXJuIGNhbGxlZEZ1bmN0aW9uKC4uLmFyZ3MpO1xufVxuXG5mdW5jdGlvbiBnZXRQcm9wZXJ0eTxUIGV4dGVuZHMgb2JqZWN0LCBLIGV4dGVuZHMga2V5b2YgVCA9IGtleW9mIFQ+KFxuICAgIG9iajogVCxcbiAgICBrZXk6IEtcbik6IFRbS10ge1xuICAgIHJldHVybiBvYmpba2V5XTtcbn1cblxuY29uc3QgcmVzdWx0ID0gY2FsbChcbiAgICBnZXRQcm9wZXJ0eSxcbiAgICB7IGE6ICdhc2RmJywgYjogJ2F6Y3YnLCBjOiAyNCB9LFxuICAgICdjJ1xuKTtcblxudHlwZSBHZW5lcmljRnVuY3Rpb24gPSAoLi4uYXJnczogYW55W10pID0+IGFueTtcblxudHlwZSBGdW5jdGlvblJldHVybjxGdWNudGlvblR5cGUgZXh0ZW5kcyBHZW5lcmljRnVuY3Rpb24+ID1cbiAgICBGdWNudGlvblR5cGUgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IGluZmVyIFJldHVyblR5cGVcbiAgICAgICAgPyBSZXR1cm5UeXBlXG4gICAgICAgIDogbmV2ZXI7XG5cbmludGVyZmFjZSBJbmZvIHtcbiAgICBkYXRlOiBEYXRlO1xuICAgIHRpbWVzdGFtcDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbn1cblxudHlwZSBPYmogPSB7IGE6IEluZm8gfTtcblxuLy8gdHlwZSBSZXRydW5UeXBlID0gRnVuY3Rpb25SZXR1cm48dHlwZW9mIGdldFByb3BlcnR5PE9iaiwgJ2EnPj5cbnR5cGUgdGVzdCA9IFJldHVyblR5cGU8dHlwZW9mIGdldFByb3BlcnR5PE9iaiwgJ2EnPj47XG5cbi8vIHR5cGUgQ29uc3RydWN0b3IgPSBuZXcgKC4uLmFyZ3M6IGFueVtdKVxuXG50eXBlIEdldENvbXBvbmVudFByb3BzPFxuICAgIENvbXBvbmVudCBleHRlbmRzIChwcm9wczogeyBjaGlsZHJlbjogYW55IH0pID0+IFJlYWN0Tm9kZVxuPiA9IENvbXBvbmVudCBleHRlbmRzIChwcm9wczogaW5mZXIgUHJvcHMpID0+IFJlYWN0Tm9kZVxuICAgID8gUHJvcHNcbiAgICA6IG5ldmVyO1xuXG4vLyBjb25zdCBCdXR0b25Db250YWluZXI6IEpTWC5FbGVtZW50PE9taXQ8R2V0Q29tcG9uZW50UHJvcHM8dHlwb2YgQnV0dG9uPiwgJ3RpdGxlJz4+ID0gKHByb3BzKSA9PiB7XG4vLyAgICAgY29uc3QgdGl0bGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHNlbGVjdEJ5QnV0dG9uVGl0bGUoc3RhdGUsIHVzZXJJZCkpO1xuXG4vLyAgICAgcmV0dXJuIDxCdXR0b24gIHsuLi5wcm9wc30gdGl0bGU9e3RpdGxlfS8+O1xuLy8gfVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFTyxTQUFTQSxJQUFJQSxDQUNoQkMsY0FBNkMsRUFFbkM7RUFBQSxTQUFBQyxJQUFBLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxFQURQQyxJQUFJLE9BQUFDLEtBQUEsQ0FBQUosSUFBQSxPQUFBQSxJQUFBLFdBQUFLLElBQUEsTUFBQUEsSUFBQSxHQUFBTCxJQUFBLEVBQUFLLElBQUE7SUFBSkYsSUFBSSxDQUFBRSxJQUFBLFFBQUFKLFNBQUEsQ0FBQUksSUFBQTtFQUFBO0VBRVAsT0FBT04sY0FBYyxDQUFDLEdBQUdJLElBQUksQ0FBQztBQUNsQztBQUVBLFNBQVNHLFdBQVdBLENBQ2hCQyxHQUFNLEVBQ05DLEdBQU0sRUFDRjtFQUNKLE9BQU9ELEdBQUcsQ0FBQ0MsR0FBRyxDQUFDO0FBQ25CO0FBRUEsTUFBTUMsTUFBTSxHQUFHWCxJQUFJLENBQ2ZRLFdBQVcsRUFDWDtFQUFFSSxDQUFDLEVBQUUsTUFBTTtFQUFFQyxDQUFDLEVBQUUsTUFBTTtFQUFFQyxDQUFDLEVBQUU7QUFBRyxDQUFDLEVBQy9CLEdBQ0osQ0FBQzs7QUFpQkQ7O0FBR0E7O0FBUUE7QUFDQTs7QUFFQTtBQUNBIiwiaWdub3JlTGlzdCI6W119