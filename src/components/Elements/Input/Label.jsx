const LabelSearch = (props) => {
    const { htmlFor, children, label} = props;
    return (
        <label htmlFor={htmlFor} className="input input-bordered flex items-center gap-2 min-w-lg md:w-72">{label}</label>
    );
};

const Label = (props) => {
    const { htmlFor, label} = props;
    return (
        <label htmlFor={htmlFor} className="block text-sm font-medium leading-6 text-gray-900">{label}</label>
    )
}

Label.LabelSearch= LabelSearch;
export default Label;