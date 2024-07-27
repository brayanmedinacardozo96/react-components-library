interface BrandProps {
    label: string
    logo?: string
}

const Brand: React.FC<BrandProps> = (props) => {
    return (
        <a href="#" className="brand">
            {props.logo ? <img width={24} height={24} src={props.logo} alt="background" /> : null}
            <p className="text-sm text-gray-600 font-heading ml-2">{props.label}</p>
        </a>
    )
};

export default Brand;