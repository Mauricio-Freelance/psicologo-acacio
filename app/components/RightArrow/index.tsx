import * as S from "./styles";
import ICONS from "@/assets/icons"; // Importe seus ícones

// Componente funcional que utiliza o estilo
interface RightArrowProps {
    isOpen: boolean;
}

const RightArrow: React.FC<RightArrowProps> = ({ isOpen }) => {
    return (
        <S.Container>
            <S.RightArrow 
                src={ICONS.rightArrow} // Use o ícone importado
                alt="Flecha apontada para a direita"
                isOpen={isOpen}
            />
        </S.Container>
    );
};

export default RightArrow;