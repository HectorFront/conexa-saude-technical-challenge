/**
 * @author Hector Rodrigues da Silva
 */

/** @name Styled */
import * as S from './styles';
/** @name Dependencies */
import {memo, ElementType} from 'react';
/** @name External */
import {Button} from "helpers";

export const Help: ElementType = memo((_props): JSX.Element =>
    <S.ContainerHelp>
        <Button
            outline
            size="md"
            icon="help"
            style={{ position: 'absolute', bottom: 20, left: 20 }}
            onClick={() => window.open('https://www.conexasaude.com.br/#contato')}
        >
            Ajuda
        </Button>
    </S.ContainerHelp>
);