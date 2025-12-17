import pencilIkon from "../ikons/pencilIkon.svg";





    function Pencil ({onClick})  {
        return (


 <img src={pencilIkon} alt="Pencil"  className="pencil-ikon" onClick={onClick} />
    );
    }

export default Pencil;