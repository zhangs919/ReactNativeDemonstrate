import { useTheme } from 'beeshell/dist/common/styles/variables'

// 获取自定义主题的变量
// 以下是示例
const customTheme: any = {
  mtdBrandPrimary: '#ffd800',
  mtdBrandPrimaryDark: '#FFA000',
  mtdBrandSuccess: '#61cb28',
  mtdBrandSuccessLight: '#eaffd6',
  mtdBrandSuccessDark: '#45a619',
  mtdBrandWarning: '#ff8400',
  mtdBrandDanger: '#f23244',
  mtdBrandInfo: '#188afa',

  // mtdBrandPrimary: '#563d7c',
  // mtdBrandPrimaryDark: '#563d7c',
  // mtdRadiusXS: 30,
  // buttonBorderRadius: 30,
  // mtdBrandPrimary: '#f23244',
  // mtdBrandPrimaryDark: '#f23244',

}

const tmp = useTheme(customTheme)
export default tmp
