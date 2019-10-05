import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import ComicsList from './ComicsList';

const Home = () => {
  const [data, setData] = useState({
    comics: [],
    isLoading: true,
  });
  const getComics = useCallback(async () => {
    let comics = await axios
      .get('http://jsonplaceholder.typicode.com/posts')
      .then(response => response.data);
    comics = comics.map(comic => ({
      ...comic,
      url:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQoAAAC9CAMAAAB8rcOCAAAAk1BMVEX/5y0AAAD/7S7/8S//6i4lIgczLwn/6y7/7i4iHwbeySfjzShbUxCCdhf44Sz/5i09NwtHQA18cRa5qCDp0ymwoCD03SsuKggeGwVnXRJRSQ6/rSKHehgRDwPNuiSikx3RvSWUhhqqmh5yZxQ6NQpWTg+bjBvFsiPXwiZ3bBUIBwGPgRkaGAUVEwRMRQ1iWREqJwgk3bbyAAAERUlEQVR4nO3abVfaMBiHcRoitDxYQSgo4GTq1Lk5v/+nG9A2uZOm4CttOdfvnO2MJfTh39DeTdvpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgvuluvX9ev7y/FtMQ139CfX9N30cPook50bbdQDyLZoNylqEWStySTS/ONLEnKLySbF31sTZt5A7LY7WI9scfqTTaMvKWoZdnyaKKIb8UXfqp96PXmXrbf4bNRXCZOy1A7S1Gm9aqMorsV3deq0/YozLDtP7stW3fTq1Goe9H7Ju20PgqzgfrBbTEHP1eJQmeyc7YfQ2cShZ75TXfOea4SRX9ku/4eHPq2PIpyf9UPv+nB2XY/CvVLppZ3bXkU5Qam737TciZPnF4U/TvR82exkDZF8THy3D4Xu6tfTmy8G4XO/tp+63JkiSgCa2pWXTHuKk954NW6GsWTXIo3Kv7Zbv9SsyYbRf2avpOIYhrXdco+yj6Liek+EJvvRCFPFI+Z6SWjaMDPoeozUaiVHe5z88830V1GoeSJYihK93OIQt+YPnf2qtoTpYWIIs1MEW4uHvlSWhRF9RdcdBFFhe7aa4k41clRYXMzF498McfOFV+702Eiiqv12LXOj7soKsZK2V/IjR1FNorJ1ibhDjMRRWVNr1+702FH64rs0EUUFXdaDJE/trRQSeDbt+5l4Whd8bU7HXY6CllUKOfe247/UBTLy7OLQk3N5/FuxItfyMScLEJRzLyqqf1RaFtURPf7abnZxnx+MTVYIIq5d0FqfxSiqIgOP4j4yXxel3sbPFe8uMPiDKKwt9v5nqtr8x9JWVoEo4jck0Xro5A7cH/YNT2zN1ur4sCHo3h3yoXWRxHbG4plrA+69m5r1M2XEo4i2srTRZuimKpOmqb7P7u/Dv/cSe3918NwkBO3W0VpURNF9BwuvKf9jllJ8VcDnLgHcSZhAn7k+yqjGMnJDTHB06Z7kFAU8evxKHqVKJJZLGb/JvZ4tzwKnV0cj6I4ldooft/vdlM8DLJ73fIoRGlZY5xfYN0JPTk/bmfNWx6FfNgXtMlnuN0JPSfBQXHBdW7SY0/jJ/SOXmnlUfcn//ti0uKqmNMTUSTvE9fjqlnTvNUo4u3pKJ72pYUfhc7sjUr0UImiqmGT/4EfSO90FIfrZeXpmJLPWPMrbqujkEXFZHUtrOyNe/RLhR4fx6JHPsXZ6ihi8cx43u0LsSijLoJRdDpitnexHzltjkI+5NrM3HO8qMf3pUUgir4sOvcPhtochbwkjvw2cR/yGgdHhfOuybZdb91M/ResJvWb6lxm0+ALSJ2++H60Us2PYrjs5T7e3M3Rs55xNfNroPRmUTYun7WaFJ8WT5di0aZLb7GrLoZ/enWS6wbUFeIVQv/AyJcLq9Vg7DSaT3HNAuLmv6wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMDX+A/OpELywQMVgAAAAABJRU5ErkJggg==',
    }));
    setData({
      ...data,
      comics: comics,
      isLoading: false,
    });
  }, [data]);

  useEffect(() => {
    getComics();
  }, []);

  const mainComicsList = [
    { id: 1, title: '신작 연재' },
    { id: 2, title: '주간 만화' },
    { id: 3, title: '월간 만화' },
    { id: 4, title: '남자들이 좋아하는 만화' },
    { id: 5, title: '여자들이 좋아하는 만화' },
  ];

  return (
    <>
      {data.isLoading ? (
        <h1>Loading....</h1>
      ) : (
        mainComicsList.map(list => (
          <ComicsList
            key={list.id}
            title={list.title}
            bio={list.title}
            comics={data.comics}
          />
        ))
      )}
    </>
  );
};

export default Home;
