import Image from 'next/image'

import { Grid } from 'components/Grid'
import { PokemonTypesProps } from 'components/PokemonCard'
import PokemonTypeIcon from 'components/PokemonTypeIcon'
import { formatNameID, formatNameImageHD } from 'utils/formatName'
import * as S from './styles'

export type PokemonStatusProps = {
  name: string
  category: string
  id: number
  height: number
  wight: number
  abilities: string[]
  types: PokemonTypesProps[]
}

const PokemonStatus = ({
  types,
  abilities,
  category,
  height,
  id,
  name,
  wight
}: PokemonStatusProps) => (
  <S.ContainerInformation>
    <S.PokemonName>{name}</S.PokemonName>
    <S.PokemonCategory typeColor={types[0]}>{category}</S.PokemonCategory>
    {/* <Grid> */}
    <S.Wrapper>
      <S.WrapperInformation>
        <S.RotateDivRight>
          <S.Table>
            <tr>
              <td>ID</td>
              <td>#{formatNameID(id)}</td>
            </tr>
            <tr>
              <td>Height</td>
              <td>{height}m</td>
            </tr>
            <tr>
              <td>Wight</td>
              <td>{wight}Kg</td>
            </tr>
            <tr>
              <td>Abilities</td>
              <td>
                <span>
                  {abilities.map((ability, index) => (
                    <S.ButtonAbilities
                      key={index}
                      role="button"
                      typeColor={types[0]}
                    >
                      {ability}
                    </S.ButtonAbilities>
                  ))}
                </span>
              </td>
            </tr>

            <tr>
              <td>Type</td>
              <td>
                <S.WrapperTypes>
                  {types.map((type, index) => (
                    <S.Type key={index} typeColor={type}>
                      <span>{type}</span>
                      <PokemonTypeIcon type={type} />
                    </S.Type>
                  ))}
                </S.WrapperTypes>
              </td>
            </tr>
            <tr>
              <td>Type</td>
              <td>
                <S.WrapperTypes>
                  {types.map((type, index) => (
                    <S.Type key={index} typeColor={type}>
                      <span>{type}</span>
                      <PokemonTypeIcon type={type} />
                    </S.Type>
                  ))}
                </S.WrapperTypes>
              </td>
            </tr>
          </S.Table>
        </S.RotateDivRight>
      </S.WrapperInformation>
      {/* <S.WrapperImage> */}
      <Image
        src="/img/006.png"
        alt={name}
        layout="intrinsic"
        width={1280}
        height={1280}
        // objectFit="contain"
      />
      {/* </S.WrapperImage> */}
      <S.WrapperStatus>
        <S.RotateDivLeft>
          <S.Table>
            <tr>
              <td>ID</td>
              <td>#{formatNameID(id)}</td>
            </tr>
            <tr>
              <td>Height</td>
              <td>{height}m</td>
            </tr>
            <tr>
              <td>Wight</td>
              <td>{wight}Kg</td>
            </tr>
            <tr>
              <td>Abilities</td>
              <td>
                <span>
                  {abilities.map((ability, index) => (
                    <S.ButtonAbilities
                      key={index}
                      role="button"
                      typeColor={types[0]}
                    >
                      {ability}
                    </S.ButtonAbilities>
                  ))}
                </span>
              </td>
            </tr>

            <tr>
              <td>Type</td>
              <td>
                <S.WrapperTypes>
                  {types.map((type, index) => (
                    <S.Type key={index} typeColor={type}>
                      <span>{type}</span>
                      <PokemonTypeIcon type={type} />
                    </S.Type>
                  ))}
                </S.WrapperTypes>
              </td>
            </tr>
            <tr>
              <td>Type</td>
              <td>
                <S.WrapperTypes>
                  {types.map((type, index) => (
                    <S.Type key={index} typeColor={type}>
                      <span>{type}</span>
                      <PokemonTypeIcon type={type} />
                    </S.Type>
                  ))}
                </S.WrapperTypes>
              </td>
            </tr>
          </S.Table>
        </S.RotateDivLeft>
      </S.WrapperStatus>
    </S.Wrapper>
    {/* </Grid> */}
    <br />

    <br />

    <h1>More Content Coming Soon!</h1>
  </S.ContainerInformation>
)

export default PokemonStatus
