

export function Label(props) {
    return (
        <label htmlFor={htmlFor(props)}
        className="block text-sm font-medium leading-6 text-white"
        {...props}
        >
        {props.children}
      </label>
    );
}
export default Label
