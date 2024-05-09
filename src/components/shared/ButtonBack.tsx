import { Button } from 'antd';
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { css } from '@emotion/react';

const btnStyle = css`
  padding: 0 8px !important;
`

interface IButtonBackProps {
  className?: string;
}

const ButtonBack: React.FC<IButtonBackProps> = ({ className }) => {
  const navigate = useNavigate();
  return (
    <>
      <Button
        onClick={() => navigate(-1)}
        css={btnStyle}
        className={className}
      >
        <IoIosArrowBack />
      </Button>
    </>
  )
};

export default ButtonBack;
