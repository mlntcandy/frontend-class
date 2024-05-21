import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { PdfDocument } from "../lib/document";

const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`;

const StyledErrorDiv = styled.div`
  background-color: #f8d7da;
  color: #721c24;
  padding: 0.75rem 1.25rem;
  margin-top: 1rem;
  border: 1px solid #f5c6cb;
  border-radius: 0.25rem;
`;

const StyledLabel = styled.label`
  display: block;
  & > input {
    display: block;
    width: 100%;
    margin-top: 0.25rem;
  }
  margin-bottom: 0.5rem;
`;

const StyledInput = styled.input`
  background-color: var(--gray-100);
  border: 1px solid var(--gray-200);
  color: var(--text);
  border-radius: 0.25rem;
  padding: 0.5em;
`;

const StyledButton = styled.button`
  background-color: var(--gray-100);
  border: 1px solid var(--gray-200);
  color: var(--text);
  padding: 0.5em 1em;
  cursor: pointer;
  border-radius: 0.25rem;
`;

interface IForm {
  name: string;
  picture: FileList;
}

interface ITask extends IForm {
  id: string;
  date: Date;
}

export function Pdf() {
  const [task, setTask] = useState<ITask[]>([]);

  const form = useForm<IForm>({});

  const onSubmit = (data: IForm) => {
    const id = Math.random().toString(36).substring(7);
    const date = new Date();
    setTask((t) => [{ ...data, id, date }, ...t]);
  };

  return (
    <Container>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <StyledLabel>
          Имя
          <StyledInput
            {...form.register("name", {
              required: "Поле обязательно для заполнения",
              minLength: {
                value: 3,
                message: "Минимальная длина - 3 символа",
              },
            })}
          />
          {form.formState.errors.name && (
            <StyledErrorDiv>
              {form.formState.errors.name.message}
            </StyledErrorDiv>
          )}
        </StyledLabel>

        <StyledLabel>
          Файл
          <StyledInput type="file" {...form.register("picture")} />
          {form.formState.errors.picture && (
            <StyledErrorDiv>
              {form.formState.errors.picture.message}
            </StyledErrorDiv>
          )}
        </StyledLabel>

        <StyledButton type="submit">Сгенерировать</StyledButton>
      </form>

      <ul>
        {task.map((t) => (
          <li key={t.id}>
            <p>{t.name}</p>
            <p>{t.date.toLocaleString()}</p>
            {t.picture && t.picture.length > 0 && (
              <img src={URL.createObjectURL(t.picture[0])} alt="" />
            )}
            <p>
              <PDFDownloadLink
                document={<PdfDocument name={t.name} picture={t.picture} />}
                fileName={`${t.name}.pdf`}
              >
                {({ loading, error }) =>
                  loading ? "Загрузка..." : error ? "Ошибка" : "Скачать PDF"
                }
              </PDFDownloadLink>
            </p>
          </li>
        ))}
      </ul>
    </Container>
  );
}
