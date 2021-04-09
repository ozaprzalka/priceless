import React from "react";
import { Box, Text } from "grommet";
import { aboutStyle } from "../../styles";

export const AboutPage = () => (
  <Box>
    <div className="dashboard" style={aboutStyle}>
      <Text>
        Lubisz oszczędzać na ulubionych produktach? Kto nie lubi? A może jesteś
        zawodowym łowcą najlepszych okazji? Z nami Twoje polowania mogą stać się
        prostsze! Zarejestruj się w XXX, aby dostawać powiadomienia za każdym
        razem, kiedy cena wymarzonego produktu spadnie. Śledź ulubione sklepy,
        okazje i akcje, które przygotowujemy! Jeśli chcesz dołączyć do naszego
        programu, wystarczy kilka prostych kroków:
        <ul style={{ margin: "30px" }}>
          <li style={{ margin: "30px" }}>
            1. Zarejestruj się na naszej stronie
          </li>
          <li style={{ margin: "30px" }}>
            2. Skopiuj link do wybranego produktu
          </li>
          <li style={{ margin: "30px" }}>3. Wklej link w wyszukiwarce</li>
          <li style={{ margin: "30px" }}>
            4. Poczekaj na powiadomomienie o spadku ceny
          </li>
          <li style={{ margin: "30px" }}>
            5. Ciesz się zaoszczędzonymi pieniędzmi!
          </li>
        </ul>
      </Text>
    </div>
  </Box>
);
