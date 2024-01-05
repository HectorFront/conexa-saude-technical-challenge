/** @name Dependencies */
import styled from "styled-components";
/** @name Mixins */
import {flex, textEllipsis} from "layout/mixins/styles";

export const ItemList = styled.div`
  width: 100%;
  height: auto;
  padding: 12px;
  position: relative;
  border-radius: 7px;
  border: 2px solid #e5e5e5;
  ${flex({direction: 'row', alignY: 'center', alignX: 'space-between'})}
`;

export const GroupDataPatient = styled.div`
  width: 100%;
  ${flex({ direction: 'column', alignY: 'start', alignX: 'start' })}
`;

export const Text = styled.span`
  width: calc(100% / 2);
  color: #262626;
  font-size: 1.3rem;
  ${textEllipsis()}
`;

export const SubText = styled.span`
  width: calc(100% / 2);
  color: #7e7e7e;
  font-size: 1rem;
  ${textEllipsis()}
`;