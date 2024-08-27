export function call(calledFunction, ...args) {
    return calledFunction(...args);
}
function getProperty(obj, key) {
    return obj[key];
}
const result = call(getProperty, { a: 'asdf', b: 'azcv', c: 24 }, 'c');
// const ButtonContainer: JSX.Element<Omit<GetComponentProps<typof Button>, 'title'>> = (props) => {
//     const title = useSelector((state) => selectByButtonTitle(state, userId));
//     return <Button  {...props} title={title}/>;
// }
