import * as S from './style';

export default function CheckBox({ onChange, isChecked }) {
  return <S.CheckBox onChange={onChange} type="checkbox" checked={isChecked} />;
}
