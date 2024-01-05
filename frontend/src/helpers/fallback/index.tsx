/**
 * @author Hector Rodrigues da Silva
 */

/** @name Styled */
import * as S from './styles';
/** @name Dependencies */
import {memo} from "react";

export const LoaderFallback = memo((_props) =>
    <S.Container>
        <div className="spinner-border text-primary" role="status"/>
    </S.Container>
)