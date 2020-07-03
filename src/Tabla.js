import React from 'react';

function TablaEjemplo(Props) {
	const [usuariosInformacion, setUsuarioInformacion] = React.useState([]);

	React.useEffect(() => {
		setUsuarioInformacion(Props.datos);
	}, [Props.datos]);

	return (
		<tbody>
			{usuariosInformacion.map((usuario) => {
				return (
					<tr>
						<td>{usuario.id}</td>
						<td>{usuario.name}</td>
						<td>{usuario.username}</td>
						<td>{usuario.email}</td>
						<td>{usuario.phone}</td>
					</tr>
				);
			})}
		</tbody>
	);
}

export default TablaEjemplo;
