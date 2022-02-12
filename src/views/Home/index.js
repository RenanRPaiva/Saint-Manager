import { Alert, Col, Container, Row, Spinner } from "react-bootstrap";
import { Layout } from "../../components/Layout";
import Banner from "../../assets/img/Cruz.jpg";
import OutrosEventos from "../../assets/img/Eventos.jfif";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { CardCustom } from "../../components/CardEvento";
import styled from "styled-components";
import { apiUrl } from "../../services/Api"





export function HomeView() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [eventosHome, setEventosHome] = useState([])
  const [generalError, setGeneralError] = useState()
  useEffect(() => {
    fetch(`${apiUrl}/eventos`)
      .then(response => response.json())
      .then(data => {
        setEventosHome(data)
      })
      .catch(() => {
        setGeneralError('Não foi possível listar os Eventos. Recarregue a página.')
      })
      .finally(() => {
        setLoading(false)
      })
  },
    [])
  const threeEventos = eventosHome.slice(0, 3)

  const redirectEvento = (id) => {
    navigate(`/eventos/${id}`)
  }
  return (
    <Layout>
      <Container>
        <BannerContainerStyled>
          <BannerRowStyled className='shadow rounded'>
            <ColBannerStyled lg={4} className='rounded-left' >
              <ImgBannerStyled src={Banner} alt="Banner de Igreja" className='rounded' />
            </ColBannerStyled>
            <Col lg={8} className="p-10">
              <H1Styled className='text-sm-start'>Venha  conhecer o Saint Manager!</H1Styled>
              <p className='ps-3' >Membros podem se  inscrever a eventos,  visitas e saber muito mais!</p>
              <p className='text-center'>Fique sempre atento  as datas dos eventos, para não perder!</p>
              <p className='text-end'>Que Deus  abençoe a todos!  Volte Sempre!</p>
            </Col>
          </BannerRowStyled>
        </BannerContainerStyled>
        {generalError && (
          <Alert variant="danger">{generalError}</Alert>
        )}
        {loading ? (
          <div className="text-center">
            <Spinner animation="border" role="status" variant="warning">
              <span className="visually-hidden">Carregando...</span>
            </Spinner>
          </div>
        ) : (
          <Row>
            {threeEventos.map((evento, index) => {
              return (
                <Col key={index} className="grid-eventos-item mb-3 " xs={6} md={4} lg={3}>
                  <CardCustom
                    imageSrc={evento.image}
                    altImg={evento.name}
                    title={evento.name}
                    description={evento.shortDescription}
                    textButton='Inscreva-se!'
                    onClickButton={() => redirectEvento(evento.id)}
                    hideDescriptionMobile={'true'}
                  />
                </Col>
              )
            })}
            <Col className="grid-eventos-item mb-3" xs={6} md={4} lg={3}>
             <CardCustom  
              imageSrc={OutrosEventos}
              altImg='Outros Eventos'
              title= 'Encontre Outros Eventos'          
              textButton='Veja Mais!'
              onClickButton={() => navigate('/eventos')}             
             />
            </Col>
          </Row>
        )}
      </Container>
    </ Layout>
  )
}

const BannerRowStyled = styled(Row)`
    object-fit: cover;
`
const BannerContainerStyled = styled(Container)`
    margin-top: 25px;
    margin-bottom: 25px;
`

const H1Styled = styled.h1`
   font-size: x-large;
`

const ImgBannerStyled = styled.img`
    width: 100%;
    height: 100%;
    margin-left: -12px;
`

const ColBannerStyled = styled(Col)`
    @media (max-device-width:992px) {
      box-sizing: content-box;
    }
`