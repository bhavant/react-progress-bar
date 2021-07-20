import {useState} from 'react';
import ProductAddedStepper from './ProductAddedStepper';
import './App.css';

function App() {

  const [prdCount, setPrdCount] = useState(5);

  const clickHandle = (num) => {
    setPrdCount(prdCount + num);
  }

  const stepMsgs = {
    9 : '$5 Off',
    12: '$10 Off',
    20: '$20 Off'
  }

  return (
    <>
      <div className="App">
        <ProductAddedStepper
          maxProductsAllowed={24}
          currentInCartCount={prdCount}
          stepMessages={stepMsgs}
        />
      </div>
      <div style={{
                    display:"flex",
                    "justify-content": "center",
                    "margin-top": "50px",
                    "margin-bottom": "50px",
                  }}>
        <button  style={{marginRight: "10px" }}onClick={() => clickHandle(1)}>Add 1</button>
        <button onClick={() => clickHandle(-1)}>Remove 1</button>
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id ligula sagittis, lobortis enim quis, semper metus. Suspendisse ac sodales leo. Nunc eu aliquam nulla. Suspendisse eros felis, ornare sed tincidunt id, finibus non libero. Pellentesque placerat ultricies quam, ut consequat ante interdum id. Etiam a malesuada metus. Nunc sed ante in purus sagittis accumsan. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam sollicitudin ullamcorper odio, et condimentum ante mattis at.
        Curabitur feugiat erat magna, nec facilisis orci semper vel. Vestibulum eget pulvinar ante. Morbi quis ex ornare, facilisis risus at, facilisis lacus. Mauris in felis rhoncus sem dignissim auctor vitae vitae diam. Etiam vestibulum, ipsum sed consectetur suscipit, metus augue viverra tortor, a egestas tortor leo ut felis. Praesent auctor at est vel consequat. Sed volutpat id turpis at aliquam.
        Fusce ullamcorper bibendum purus sit amet tincidunt. Phasellus venenatis neque in porttitor iaculis. Sed consectetur lectus sit amet lacus tristique, faucibus egestas lacus sagittis. Etiam interdum, magna non bibendum egestas, augue sem efficitur risus, ac pellentesque libero felis a leo. Suspendisse volutpat sem sit amet gravida luctus. Donec magna purus, pellentesque ut odio ac, tincidunt suscipit nisi. Mauris non commodo mauris, ut semper tellus. Nunc nec egestas nunc. Aliquam erat volutpat. Duis auctor nisi et turpis pretium auctor. Pellentesque sit amet lectus augue.
        In efficitur orci bibendum, scelerisque urna a, feugiat augue. Mauris vitae porttitor lectus. Maecenas commodo, nibh at interdum viverra, diam neque elementum eros, in interdum lorem odio eget risus. In rhoncus egestas imperdiet. Fusce velit mi, dapibus vitae imperdiet et, lobortis at nisl. Proin consequat ultrices nisl eget lacinia. Fusce euismod neque viverra nibh aliquet pretium. Nullam congue risus leo, vel elementum justo bibendum vitae. Maecenas ornare eget purus at fringilla. Phasellus aliquam, enim vitae molestie fringilla, libero nulla volutpat metus, vitae gravida purus sapien ac dolor. Pellentesque lacus urna, maximus quis sapien nec, egestas scelerisque nulla. Etiam ultrices aliquam auctor. Duis maximus ut ligula vitae ultricies. Maecenas ut risus quis ipsum hendrerit eleifend. Ut vel fermentum ligula. Sed auctor fringilla condimentum.
        Nulla facilisi. Morbi nec semper felis, eu pretium neque. Donec pellentesque auctor malesuada. Vestibulum sed risus suscipit, vulputate erat eget, blandit elit. Donec tincidunt, ex hendrerit facilisis consectetur, eros arcu venenatis ipsum, et condimentum ligula justo quis eros. Pellentesque varius mauris eget condimentum faucibus. Cras et metus ipsum. Nunc nec velit quis nisi suscipit fermentum. Aliquam erat volutpat. Praesent lobortis, purus vitae vehicula venenatis, erat neque cursus lorem, sed suscipit odio metus non eros. Integer diam risus, varius a maximus venenatis, auctor at nibh.
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id ligula sagittis, lobortis enim quis, semper metus. Suspendisse ac sodales leo. Nunc eu aliquam nulla. Suspendisse eros felis, ornare sed tincidunt id, finibus non libero. Pellentesque placerat ultricies quam, ut consequat ante interdum id. Etiam a malesuada metus. Nunc sed ante in purus sagittis accumsan. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam sollicitudin ullamcorper odio, et condimentum ante mattis at.
        Curabitur feugiat erat magna, nec facilisis orci semper vel. Vestibulum eget pulvinar ante. Morbi quis ex ornare, facilisis risus at, facilisis lacus. Mauris in felis rhoncus sem dignissim auctor vitae vitae diam. Etiam vestibulum, ipsum sed consectetur suscipit, metus augue viverra tortor, a egestas tortor leo ut felis. Praesent auctor at est vel consequat. Sed volutpat id turpis at aliquam.
        Fusce ullamcorper bibendum purus sit amet tincidunt. Phasellus venenatis neque in porttitor iaculis. Sed consectetur lectus sit amet lacus tristique, faucibus egestas lacus sagittis. Etiam interdum, magna non bibendum egestas, augue sem efficitur risus, ac pellentesque libero felis a leo. Suspendisse volutpat sem sit amet gravida luctus. Donec magna purus, pellentesque ut odio ac, tincidunt suscipit nisi. Mauris non commodo mauris, ut semper tellus. Nunc nec egestas nunc. Aliquam erat volutpat. Duis auctor nisi et turpis pretium auctor. Pellentesque sit amet lectus augue.
        In efficitur orci bibendum, scelerisque urna a, feugiat augue. Mauris vitae porttitor lectus. Maecenas commodo, nibh at interdum viverra, diam neque elementum eros, in interdum lorem odio eget risus. In rhoncus egestas imperdiet. Fusce velit mi, dapibus vitae imperdiet et, lobortis at nisl. Proin consequat ultrices nisl eget lacinia. Fusce euismod neque viverra nibh aliquet pretium. Nullam congue risus leo, vel elementum justo bibendum vitae. Maecenas ornare eget purus at fringilla. Phasellus aliquam, enim vitae molestie fringilla, libero nulla volutpat metus, vitae gravida purus sapien ac dolor. Pellentesque lacus urna, maximus quis sapien nec, egestas scelerisque nulla. Etiam ultrices aliquam auctor. Duis maximus ut ligula vitae ultricies. Maecenas ut risus quis ipsum hendrerit eleifend. Ut vel fermentum ligula. Sed auctor fringilla condimentum.
        Nulla facilisi. Morbi nec semper felis, eu pretium neque. Donec pellentesque auctor malesuada. Vestibulum sed risus suscipit, vulputate erat eget, blandit elit. Donec tincidunt, ex hendrerit facilisis consectetur, eros arcu venenatis ipsum, et condimentum ligula justo quis eros. Pellentesque varius mauris eget condimentum faucibus. Cras et metus ipsum. Nunc nec velit quis nisi suscipit fermentum. Aliquam erat volutpat. Praesent lobortis, purus vitae vehicula venenatis, erat neque cursus lorem, sed suscipit odio metus non eros. Integer diam risus, varius a maximus venenatis, auctor at nibh.
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id ligula sagittis, lobortis enim quis, semper metus. Suspendisse ac sodales leo. Nunc eu aliquam nulla. Suspendisse eros felis, ornare sed tincidunt id, finibus non libero. Pellentesque placerat ultricies quam, ut consequat ante interdum id. Etiam a malesuada metus. Nunc sed ante in purus sagittis accumsan. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam sollicitudin ullamcorper odio, et condimentum ante mattis at.
        Curabitur feugiat erat magna, nec facilisis orci semper vel. Vestibulum eget pulvinar ante. Morbi quis ex ornare, facilisis risus at, facilisis lacus. Mauris in felis rhoncus sem dignissim auctor vitae vitae diam. Etiam vestibulum, ipsum sed consectetur suscipit, metus augue viverra tortor, a egestas tortor leo ut felis. Praesent auctor at est vel consequat. Sed volutpat id turpis at aliquam.
        Fusce ullamcorper bibendum purus sit amet tincidunt. Phasellus venenatis neque in porttitor iaculis. Sed consectetur lectus sit amet lacus tristique, faucibus egestas lacus sagittis. Etiam interdum, magna non bibendum egestas, augue sem efficitur risus, ac pellentesque libero felis a leo. Suspendisse volutpat sem sit amet gravida luctus. Donec magna purus, pellentesque ut odio ac, tincidunt suscipit nisi. Mauris non commodo mauris, ut semper tellus. Nunc nec egestas nunc. Aliquam erat volutpat. Duis auctor nisi et turpis pretium auctor. Pellentesque sit amet lectus augue.
        In efficitur orci bibendum, scelerisque urna a, feugiat augue. Mauris vitae porttitor lectus. Maecenas commodo, nibh at interdum viverra, diam neque elementum eros, in interdum lorem odio eget risus. In rhoncus egestas imperdiet. Fusce velit mi, dapibus vitae imperdiet et, lobortis at nisl. Proin consequat ultrices nisl eget lacinia. Fusce euismod neque viverra nibh aliquet pretium. Nullam congue risus leo, vel elementum justo bibendum vitae. Maecenas ornare eget purus at fringilla. Phasellus aliquam, enim vitae molestie fringilla, libero nulla volutpat metus, vitae gravida purus sapien ac dolor. Pellentesque lacus urna, maximus quis sapien nec, egestas scelerisque nulla. Etiam ultrices aliquam auctor. Duis maximus ut ligula vitae ultricies. Maecenas ut risus quis ipsum hendrerit eleifend. Ut vel fermentum ligula. Sed auctor fringilla condimentum.
        Nulla facilisi. Morbi nec semper felis, eu pretium neque. Donec pellentesque auctor malesuada. Vestibulum sed risus suscipit, vulputate erat eget, blandit elit. Donec tincidunt, ex hendrerit facilisis consectetur, eros arcu venenatis ipsum, et condimentum ligula justo quis eros. Pellentesque varius mauris eget condimentum faucibus. Cras et metus ipsum. Nunc nec velit quis nisi suscipit fermentum. Aliquam erat volutpat. Praesent lobortis, purus vitae vehicula venenatis, erat neque cursus lorem, sed suscipit odio metus non eros. Integer diam risus, varius a maximus venenatis, auctor at nibh.
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id ligula sagittis, lobortis enim quis, semper metus. Suspendisse ac sodales leo. Nunc eu aliquam nulla. Suspendisse eros felis, ornare sed tincidunt id, finibus non libero. Pellentesque placerat ultricies quam, ut consequat ante interdum id. Etiam a malesuada metus. Nunc sed ante in purus sagittis accumsan. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam sollicitudin ullamcorper odio, et condimentum ante mattis at.

        Curabitur feugiat erat magna, nec facilisis orci semper vel. Vestibulum eget pulvinar ante. Morbi quis ex ornare, facilisis risus at, facilisis lacus. Mauris in felis rhoncus sem dignissim auctor vitae vitae diam. Etiam vestibulum, ipsum sed consectetur suscipit, metus augue viverra tortor, a egestas tortor leo ut felis. Praesent auctor at est vel consequat. Sed volutpat id turpis at aliquam.

        Fusce ullamcorper bibendum purus sit amet tincidunt. Phasellus venenatis neque in porttitor iaculis. Sed consectetur lectus sit amet lacus tristique, faucibus egestas lacus sagittis. Etiam interdum, magna non bibendum egestas, augue sem efficitur risus, ac pellentesque libero felis a leo. Suspendisse volutpat sem sit amet gravida luctus. Donec magna purus, pellentesque ut odio ac, tincidunt suscipit nisi. Mauris non commodo mauris, ut semper tellus. Nunc nec egestas nunc. Aliquam erat volutpat. Duis auctor nisi et turpis pretium auctor. Pellentesque sit amet lectus augue.

        In efficitur orci bibendum, scelerisque urna a, feugiat augue. Mauris vitae porttitor lectus. Maecenas commodo, nibh at interdum viverra, diam neque elementum eros, in interdum lorem odio eget risus. In rhoncus egestas imperdiet. Fusce velit mi, dapibus vitae imperdiet et, lobortis at nisl. Proin consequat ultrices nisl eget lacinia. Fusce euismod neque viverra nibh aliquet pretium. Nullam congue risus leo, vel elementum justo bibendum vitae. Maecenas ornare eget purus at fringilla. Phasellus aliquam, enim vitae molestie fringilla, libero nulla volutpat metus, vitae gravida purus sapien ac dolor. Pellentesque lacus urna, maximus quis sapien nec, egestas scelerisque nulla. Etiam ultrices aliquam auctor. Duis maximus ut ligula vitae ultricies. Maecenas ut risus quis ipsum hendrerit eleifend. Ut vel fermentum ligula. Sed auctor fringilla condimentum.

        Nulla facilisi. Morbi nec semper felis, eu pretium neque. Donec pellentesque auctor malesuada. Vestibulum sed risus suscipit, vulputate erat eget, blandit elit. Donec tincidunt, ex hendrerit facilisis consectetur, eros arcu venenatis ipsum, et condimentum ligula justo quis eros. Pellentesque varius mauris eget condimentum faucibus. Cras et metus ipsum. Nunc nec velit quis nisi suscipit fermentum. Aliquam erat volutpat. Praesent lobortis, purus vitae vehicula venenatis, erat neque cursus lorem, sed suscipit odio metus non eros. Integer diam risus, varius a maximus venenatis, auctor at nibh.
      </div>
      <div>

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id ligula sagittis, lobortis enim quis, semper metus. Suspendisse ac sodales leo. Nunc eu aliquam nulla. Suspendisse eros felis, ornare sed tincidunt id, finibus non libero. Pellentesque placerat ultricies quam, ut consequat ante interdum id. Etiam a malesuada metus. Nunc sed ante in purus sagittis accumsan. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam sollicitudin ullamcorper odio, et condimentum ante mattis at.

        Curabitur feugiat erat magna, nec facilisis orci semper vel. Vestibulum eget pulvinar ante. Morbi quis ex ornare, facilisis risus at, facilisis lacus. Mauris in felis rhoncus sem dignissim auctor vitae vitae diam. Etiam vestibulum, ipsum sed consectetur suscipit, metus augue viverra tortor, a egestas tortor leo ut felis. Praesent auctor at est vel consequat. Sed volutpat id turpis at aliquam.

        Fusce ullamcorper bibendum purus sit amet tincidunt. Phasellus venenatis neque in porttitor iaculis. Sed consectetur lectus sit amet lacus tristique, faucibus egestas lacus sagittis. Etiam interdum, magna non bibendum egestas, augue sem efficitur risus, ac pellentesque libero felis a leo. Suspendisse volutpat sem sit amet gravida luctus. Donec magna purus, pellentesque ut odio ac, tincidunt suscipit nisi. Mauris non commodo mauris, ut semper tellus. Nunc nec egestas nunc. Aliquam erat volutpat. Duis auctor nisi et turpis pretium auctor. Pellentesque sit amet lectus augue.

        In efficitur orci bibendum, scelerisque urna a, feugiat augue. Mauris vitae porttitor lectus. Maecenas commodo, nibh at interdum viverra, diam neque elementum eros, in interdum lorem odio eget risus. In rhoncus egestas imperdiet. Fusce velit mi, dapibus vitae imperdiet et, lobortis at nisl. Proin consequat ultrices nisl eget lacinia. Fusce euismod neque viverra nibh aliquet pretium. Nullam congue risus leo, vel elementum justo bibendum vitae. Maecenas ornare eget purus at fringilla. Phasellus aliquam, enim vitae molestie fringilla, libero nulla volutpat metus, vitae gravida purus sapien ac dolor. Pellentesque lacus urna, maximus quis sapien nec, egestas scelerisque nulla. Etiam ultrices aliquam auctor. Duis maximus ut ligula vitae ultricies. Maecenas ut risus quis ipsum hendrerit eleifend. Ut vel fermentum ligula. Sed auctor fringilla condimentum.

        Nulla facilisi. Morbi nec semper felis, eu pretium neque. Donec pellentesque auctor malesuada. Vestibulum sed risus suscipit, vulputate erat eget, blandit elit. Donec tincidunt, ex hendrerit facilisis consectetur, eros arcu venenatis ipsum, et condimentum ligula justo quis eros. Pellentesque varius mauris eget condimentum faucibus. Cras et metus ipsum. Nunc nec velit quis nisi suscipit fermentum. Aliquam erat volutpat. Praesent lobortis, purus vitae vehicula venenatis, erat neque cursus lorem, sed suscipit odio metus non eros. Integer diam risus, varius a maximus venenatis, auctor at nibh.
      </div>
      <div>

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id ligula sagittis, lobortis enim quis, semper metus. Suspendisse ac sodales leo. Nunc eu aliquam nulla. Suspendisse eros felis, ornare sed tincidunt id, finibus non libero. Pellentesque placerat ultricies quam, ut consequat ante interdum id. Etiam a malesuada metus. Nunc sed ante in purus sagittis accumsan. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam sollicitudin ullamcorper odio, et condimentum ante mattis at.

        Curabitur feugiat erat magna, nec facilisis orci semper vel. Vestibulum eget pulvinar ante. Morbi quis ex ornare, facilisis risus at, facilisis lacus. Mauris in felis rhoncus sem dignissim auctor vitae vitae diam. Etiam vestibulum, ipsum sed consectetur suscipit, metus augue viverra tortor, a egestas tortor leo ut felis. Praesent auctor at est vel consequat. Sed volutpat id turpis at aliquam.

        Fusce ullamcorper bibendum purus sit amet tincidunt. Phasellus venenatis neque in porttitor iaculis. Sed consectetur lectus sit amet lacus tristique, faucibus egestas lacus sagittis. Etiam interdum, magna non bibendum egestas, augue sem efficitur risus, ac pellentesque libero felis a leo. Suspendisse volutpat sem sit amet gravida luctus. Donec magna purus, pellentesque ut odio ac, tincidunt suscipit nisi. Mauris non commodo mauris, ut semper tellus. Nunc nec egestas nunc. Aliquam erat volutpat. Duis auctor nisi et turpis pretium auctor. Pellentesque sit amet lectus augue.

        In efficitur orci bibendum, scelerisque urna a, feugiat augue. Mauris vitae porttitor lectus. Maecenas commodo, nibh at interdum viverra, diam neque elementum eros, in interdum lorem odio eget risus. In rhoncus egestas imperdiet. Fusce velit mi, dapibus vitae imperdiet et, lobortis at nisl. Proin consequat ultrices nisl eget lacinia. Fusce euismod neque viverra nibh aliquet pretium. Nullam congue risus leo, vel elementum justo bibendum vitae. Maecenas ornare eget purus at fringilla. Phasellus aliquam, enim vitae molestie fringilla, libero nulla volutpat metus, vitae gravida purus sapien ac dolor. Pellentesque lacus urna, maximus quis sapien nec, egestas scelerisque nulla. Etiam ultrices aliquam auctor. Duis maximus ut ligula vitae ultricies. Maecenas ut risus quis ipsum hendrerit eleifend. Ut vel fermentum ligula. Sed auctor fringilla condimentum.

        Nulla facilisi. Morbi nec semper felis, eu pretium neque. Donec pellentesque auctor malesuada. Vestibulum sed risus suscipit, vulputate erat eget, blandit elit. Donec tincidunt, ex hendrerit facilisis consectetur, eros arcu venenatis ipsum, et condimentum ligula justo quis eros. Pellentesque varius mauris eget condimentum faucibus. Cras et metus ipsum. Nunc nec velit quis nisi suscipit fermentum. Aliquam erat volutpat. Praesent lobortis, purus vitae vehicula venenatis, erat neque cursus lorem, sed suscipit odio metus non eros. Integer diam risus, varius a maximus venenatis, auctor at nibh.
      </div>
    </>
  );
}

export default App;
