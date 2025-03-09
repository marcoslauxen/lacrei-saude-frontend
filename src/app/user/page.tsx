'use client';

import { useRouter } from 'next/navigation';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Button from '@/app/components/Button';
import Image from 'next/image';
import Patient from '../../../public/Image/patient.svg';
import {
  PageWrapper,
  ContentContainer,
  Content,
  ImageContainer,
} from './styles';

export default function User() {
  const router = useRouter();

  return (
    <PageWrapper>
      <Header />
      <ContentContainer>
        <Content>
          <h1>Pessoa Usuária</h1>
          <p>
            A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento
            realizado por profissionais de qualidade e que atendam às suas
            necessidades de forma segura e acolhedora.
          </p>
          <div>
            <Button onClick={() => router.push('/')}>Voltar para a Home</Button>
          </div>
        </Content>
        <ImageContainer>
          <Image
            src={Patient}
            alt="Usuário na Lacrei Saúde"
            width={450}
            height={350}
          />
        </ImageContainer>
      </ContentContainer>
      <Footer />
    </PageWrapper>
  );
}
