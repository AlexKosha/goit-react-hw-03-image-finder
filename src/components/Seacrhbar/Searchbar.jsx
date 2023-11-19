import { Field, Form, Formik } from 'formik';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from '@emotion/styled';
import { FaSearch } from 'react-icons/fa';

const initialValues = {
  value: '',
};

const SearchForm = styled(Form)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;
const Input = styled(Field)`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
`;
const SearchBtn = styled.button`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
`;
const SearchBtnLabel = styled(FaSearch)`
  position: absolute;
  left: 10px;
  top: 14px;
  width: 24px;
  height: 24px;
  padding: 0;
  border: 0;
`;

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    if (values.value.trim() === '') {
      toast.error('Write something in the search');
      return;
    }
    onSubmit(values.value);
    resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <SearchForm>
        <SearchBtn type="submit">
          <SearchBtnLabel />
        </SearchBtn>
        <Input type="text" name="value" placeholder="Enter your search term" />
      </SearchForm>
    </Formik>
  );
};
