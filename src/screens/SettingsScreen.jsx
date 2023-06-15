import '../App.css'

import { Button } from '@nextui-org/react'


export default function SettingsScreen() {
  return (
    <div className='content'>
<div style={{gap:'30px',display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
<h1>Luz: </h1>
<div style={{display: 'flex', gap: '10px'}}>
<h1>-</h1>
<input type="range" class="form-range" id="customRange1" style={{width: '300px'}}/>
<h1>+</h1>
</div>
<h1>Zoom: </h1>
<div style={{display: 'flex', gap: '10px'}}>

<Button bordered color="primary" auto>
          +
</Button>
<Button bordered color="primary" auto>
          -
</Button>
</div>
<Button bordered color="primary" auto>
          -
</Button>
</div>
<div style={{display: 'flex', flexDirection: 'column', gap: '30px'}}>
<Button bordered color="success" auto>
          Salvar
</Button>
<Button bordered color="error" auto>
          Restaurar
</Button>
</div>
</div>
  )
}
