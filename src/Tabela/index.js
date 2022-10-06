export default function Tabela() {
    let contatos =[ 
        {
            nome: 'Bolsonaro',
            telefone: '85998652365',
            cidade: 'Caucaia-SP'
        },
        {
            nome: 'Lula',
            telefone: '88888888888',
            cidade: 'Fortaleza-RJ'
        },
    ];

    return (
        <>
            <hr/>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>CIdade</th>
                    </tr>
                </thead>
                <tbody>
                    {contatos.map((cada)=> {
                        return (
                            <tr>
                                <td>{cada.nome}</td>
                                <td>{cada.telefone}</td>
                                <td>{cada.cidade}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    );
}