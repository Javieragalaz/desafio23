// Importación estilos Bootstrap
import Image from 'react-bootstrap/Image';

// INICIO FUNCIÓN

export default function Home() {

    return (

        <div className="mt-4 pt-4">

            <div className=" Titulo mt-4 pt-4" >
                <h1 className="mt-4 pt-4 text-center">Welcome Pókemon Master</h1>
            </div>

            <div className="text-center">
                <Image src="pokeshome.png" width="1000" className=" mt-4 pt-4 rounded mx-auto d-block" />
            </div>

        </div>
    );
}