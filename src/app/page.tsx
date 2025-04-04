'use client';

import { useRouter } from 'next/navigation';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Button from '@/app/components/Button';
import Image from 'next/image';
import Professional from '../../public/Image/professional.svg';
import {
  PageWrapper,
  HomeContainer,
  Content,
  ImageContainer,
} from '@/app/styles/home';

export default function Home() {
  const router = useRouter();

  return (
    <PageWrapper>
      <Header />
      <HomeContainer>
        <Content>
          <h1>Boas vindas a Lacrei Saúde</h1>
          <p>
            Uma plataforma segura e acolhedora, conectando pessoas LGBTQIAPN+ a
            profissionais de saúde qualificados.
          </p>
          <div>
            <Button onClick={() => router.push('/user')}>Pessoa Usuária</Button>
            <Button
              variant="outlined"
              onClick={() => router.push('/professional')}
            >
              Profissional
            </Button>
          </div>
        </Content>
        <ImageContainer>
          <Image
            src={Professional}
            alt="Profissional de saúde"
            width={450}
            height={350}
          />
        </ImageContainer>
      </HomeContainer>
      <Footer />
    </PageWrapper>
  );
}
