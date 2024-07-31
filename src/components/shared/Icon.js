const Icon = (props) => {

    const { resource } = props;

    return <img src={resource?.img} alt={resource?.id} title={resource?.name} style={{ maxHeight: '24px', verticalAlign: 'bottom' }}/>
}

export default Icon;
