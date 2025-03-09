'use client';

import { useRouter } from 'next/navigation';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Button from '@/app/components/Button';
import Image from 'next/image';
import Doctors from '../../../public/Image/doctors.svg';
import {
  PageWrapper,
  ContentContainer,
  Content,
  ImageContainer,
} from './styles';

export default function Professional() {
  const router = useRouter();

  return (
    <PageWrapper>
      <Header />
      <ContentContainer>
        <Content>
          <h1>Profissional</h1>
          <p>
            Buscamos recrutar pessoas profissionais da saúde que entendam as
            necessidades e se comprometam com o bem-estar da comunidade
            LGBTQIAPN+
          </p>
          <div>
            <Button onClick={() => router.push('/')}>Voltar para a Home</Button>
          </div>
        </Content>
        <ImageContainer>
          <Image
            src={Doctors}
            alt="Profissional de saúde"
            width={450}
            height={350}
          />
        </ImageContainer>
      </ContentContainer>
      <Footer />
    </PageWrapper>
  );
}
