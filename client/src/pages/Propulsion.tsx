import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

type Product = {
  name: string;
  desc: string;
  image: string;
};

type Category = {
  id: string;
  name: string;
  subtitle?: string;
  image: string;
  products: Product[];
};

export default function Propulsion() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  useEffect(() => {
    document.title = "Sistemas de Propulsión Industrial | Grupo Topke Guatemala";
  }, []);

  const categories: Category[] = [
    {
      id: "dodge",
      name: "DODGE",
      subtitle: "Rodamientos y Acoplamientos",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/CPAiuMElwIKxmXvi.png",
      products: [
        {
          name: "Rodamientos Montados",
          desc: "Rodamientos de bolas y rodillos montados en carcasas de hierro fundido o acero estampado para aplicaciones industriales pesadas.",
          image: "https://private-us-east-1.manuscdn.com/sessionFile/1aEaUseV5JVMvV6LqjW64x/sandbox/eHQzMf5BkkizjyF3pZqPM4-img-1_1771538484000_na1fn_ZG9kZ2UtbW91bnRlZC1iZWFyaW5n.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMWFFYVVzZVY1SlZNdlY2THFqVzY0eC9zYW5kYm94L2VIUXpNZjVCa2tpemp5RjNwWnFQTTQtaW1nLTFfMTc3MTUzODQ4NDAwMF9uYTFmbl9aRzlrWjJVdGJXOTFiblJsWkMxaVpXRnlhVzVuLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=hOP-ndHRGvuhiRmwjeitaPcTImPC8QQrXuiWBVVUcCGmJom9gLm1lKUqMddbpm294~MGK87ebldGi2W5QboDR8nSN-uQAUYWbaBX1uZ~UTi9ND8wTToGR9PJaVqNrlbhFARcT3SoghuGRgaadxFDLUt9~6bICIM4wDhXnc2UUSAy6EThQXT~Abg4u45GbX6Yx0wMvwDNdI1fByTI9a4WFev0MkOVsJphXttL~2lL4aNRm-gLewoKBKphUjLtNNhb4-~HPVgJJzdiCtlUfExIY4f5m61JAiaOnu7Xs~ytcQR6YDbpSpgG8piLR5imU4Hm9ideH0xlDnaxhIUFlxeztw__"
        },
        {
          name: "Acoplamientos Flexibles",
          desc: "Acoplamientos de engranaje y elastoméricos diseñados para transmisión de potencia con capacidad de absorción de desalineación.",
          image: "https://private-us-east-1.manuscdn.com/sessionFile/1aEaUseV5JVMvV6LqjW64x/sandbox/eHQzMf5BkkizjyF3pZqPM4-img-2_1771538491000_na1fn_ZG9kZ2UtcGFyYWZsZXgtY291cGxpbmc.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMWFFYVVzZVY1SlZNdlY2THFqVzY0eC9zYW5kYm94L2VIUXpNZjVCa2tpemp5RjNwWnFQTTQtaW1nLTJfMTc3MTUzODQ5MTAwMF9uYTFmbl9aRzlrWjJVdGNHRnlZV1pzWlhndFkyOTFjR3hwYm1jLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ts2GrCEcmImgwC1YXJ4fxyL~IIafrM-~tf8TjW2j-eJwQISc8kNMDpv0B~tx0Jw4AIGHolY-KiuofI3hRKUAoUrBj8dpvZjoYRhRiwbQB4DL5igPMsHTxkCp8iJVRuDi08EsflV0V3cVc6Q~p1N5ia6ZZ3mj-z0XcunWaOyK2Fi2vn1hudUhw0GxscHYjalNhuSNqyuRyw49e4oZCd6X8VILC41K9eL7v~hDON-26KsSsCs9KAhI0cF9zwrncuQAL45LnM24SmzzPb4VWbF73cFkOeCbRg6YGWpbfYrmtNlageuAyJQkPFLeK~LYW4Q-8JBo5Ae66aBOZ8hwiVU4dg__"
        }
      ]
    },
    {
      id: "sew",
      name: "SEW EURODRIVE",
      subtitle: "Motorreductores",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/agMvIjJPdZNCPkZG.png",
      products: [
        {
          name: "Motorreductores Helicoidales",
          desc: "Reductores de engranajes helicoidales de alta eficiencia con motores eléctricos integrados para aplicaciones industriales.",
          image: "https://private-us-east-1.manuscdn.com/sessionFile/1aEaUseV5JVMvV6LqjW64x/sandbox/KacB7bgzRUFp7ManaUMITo-img-1_1771538567000_na1fn_c2V3LWhlbGljYWwtZ2Vhcm1vdG9y.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMWFFYVVzZVY1SlZNdlY2THFqVzY0eC9zYW5kYm94L0thY0I3Ymd6UlVGcDdNYW5hVU1JVG8taW1nLTFfMTc3MTUzODU2NzAwMF9uYTFmbl9jMlYzTFdobGJHbGpZV3d0WjJWaGNtMXZkRzl5LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=XmyXTfOuPLtXhtlZO37~VDrKwn6jbgJr6XN3dQTyvsgfrDO6TX33tA2J3-qrSkDZfhZJBa1Pt7O9AhzPic7bVOkHkDyicyMvF9t8flVudiJ2VKfpu2h6EMLmsztAaQH67pm4B5uc3aQn1PxAV4M5ywyeUGJnS64GK1eAcHtE4OS1rKPiESG6D9KnFKEDIHqhCxPgwitwiZW7OCAHE~IVgClRTHXRwLBW4z8Gq8CxJ5o0SgtP2ZeRzd5RWTqDwPa6o7rO1I63puRrikxd4i8l8jBfl0DzPtlEXfn-zgVhiTss5S8Gc-MxOkmSyMqXnh8JaI~84~1T7lDkPElrJQKNMQ__"
        },
        {
          name: "Reductores de Velocidad",
          desc: "Cajas reductoras de engranajes con múltiples configuraciones de montaje y relaciones de reducción para diversas aplicaciones.",
          image: "https://private-us-east-1.manuscdn.com/sessionFile/1aEaUseV5JVMvV6LqjW64x/sandbox/c8kvN6vxO2CpAhewPPQTyy-img-1_1771539507000_na1fn_c2V3LXNwZWVkLXJlZHVjZXItdjI.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMWFFYVVzZVY1SlZNdlY2THFqVzY0eC9zYW5kYm94L2M4a3ZONnZ4TzJDcEFoZXdQUFFUeXktaW1nLTFfMTc3MTUzOTUwNzAwMF9uYTFmbl9jMlYzTFhOd1pXVmtMWEpsWkhWalpYSXRkakkuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=QgH5GFU7W0EOelaFtCFEoA3vOLDJpEl4jJOlNiPPar1iL41KZ0rKOcAnpfimk4nGZ~VjWSjotSXnhHU64TO5sc1MMIGZrL1jOx2KZWQaeuVT0rld5dfdHp8dplAV3H6Cw30nphpRagdm0CFYFbTS1ek5e-gWdgvmn2vYrLvuqI7e1AXZNxpBKLbyz8pf2Nv0uxA39jRZOvcsV51W~iied4hv09T~0Gie2YPxQt~eO4gmhIaCkL7dotgcyDxmPT9CR9dEYOTZKHMwlT6tvey1oyUZK29y-oCq6Sadm3eavof0wghlG95SMT9IN58Kln0YkozWF3ipmETOFYvsD~K29Q__"
        }
      ]
    },
    {
      id: "regal",
      name: "Regal Rexnord",
      subtitle: "Motores Eléctricos",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/GcWDRZYnnSPFtrci.png",
      products: [
        {
          name: "Motores Industriales",
          desc: "Motores eléctricos trifásicos de alta eficiencia para aplicaciones industriales generales, disponibles en múltiples potencias.",
          image: "https://private-us-east-1.manuscdn.com/sessionFile/1aEaUseV5JVMvV6LqjW64x/sandbox/6SRrX4UBRdFhzMHEyyV03V-img-1_1771538632000_na1fn_cmVnYWwtaW5kdXN0cmlhbC1tb3Rvcg.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMWFFYVVzZVY1SlZNdlY2THFqVzY0eC9zYW5kYm94LzZTUnJYNFVCUmRGaHpNSEV5eVYwM1YtaW1nLTFfMTc3MTUzODYzMjAwMF9uYTFmbl9jbVZuWVd3dGFXNWtkWE4wY21saGJDMXRiM1J2Y2cuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=VeGTfVJGK1RGZb1Q-58N7B3c~jL7udqq8A2l-XE3obr6a0Gf3y-yaMvwvApSq1BBhBQyEijIaN~KdJYEHtDADSOm2PZjoMnmdGVI-cN3lF0cp9sXBRVot-YdHgVVGA4t6SYLd4-fHi0Mod36zXn0g3IPr~xNaXq2D9Uryz2TYjfIylwQGcIwn01z69e30fECrwoe2EIZSP3WJe-yARJwoXcrQUTP5nwpZaK8Zj~RjDua5ncEX~me5noJBumba2x2jyjyYgMPJh90vEofbXekBVgmrIC~2oPRRPk5NGdrVX7CYhW17SEVWfOJdJQ8DVrxO0KshT6mpZ5AIKQP6la-ew__"
        },
        {
          name: "Motores Premium Efficiency",
          desc: "Motores de eficiencia premium que cumplen con estándares NEMA Premium y IE3, reduciendo costos operativos de energía.",
          image: "https://private-us-east-1.manuscdn.com/sessionFile/1aEaUseV5JVMvV6LqjW64x/sandbox/6SRrX4UBRdFhzMHEyyV03V-img-2_1771538621000_na1fn_cmVnYWwtcHJlbWl1bS1tb3Rvcg.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMWFFYVVzZVY1SlZNdlY2THFqVzY0eC9zYW5kYm94LzZTUnJYNFVCUmRGaHpNSEV5eVYwM1YtaW1nLTJfMTc3MTUzODYyMTAwMF9uYTFmbl9jbVZuWVd3dGNISmxiV2wxYlMxdGIzUnZjZy5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=RsZJvuidQTFI49pq~RSsJk9L8ZTpy19oK1k9Bs1L2JXy7Mqd~-BWTuB5hAXZi9TlFI7R7aiPty6AieZQhGjx6kHM85TPS1C08ezIQitWo-4Lm01K~glpEI9u1jVTkktxG7YEAXiJeBrtlLgYNna0BJgA7zAeZ1jmjV1lT94yypDk2solUufsayTd5bUcM1HzHbq9zOam4QyWxoVLPn~QkLrmRAYE-qpN2hxBC-P0FmiRQc-B6BgdI60-nDR3WQgaxVrxZEyCiAd5CJe3OzEEvel2rYafRZ2p3YedSsxqqiykUb3RZ7irHSTsJsQGKx0k94Xiyi73BfvHNksnafeesQ__"
        }
      ]
    },
    {
      id: "martin",
      name: "Martin Engineering",
      subtitle: "Acoplamientos y Transmisión",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/GDHLhavwgaYvJRPZ.png",
      products: [
        {
          name: "Acoplamientos de Rejilla",
          desc: "Acoplamientos flexibles de rejilla metálica para transmisión de alto torque con capacidad de absorción de choques.",
          image: "https://private-us-east-1.manuscdn.com/sessionFile/1aEaUseV5JVMvV6LqjW64x/sandbox/WqRhcdMoVNqgOn1hJAFPDk-img-1_1771538696000_na1fn_bWFydGluLWdyaWQtY291cGxpbmc.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMWFFYVVzZVY1SlZNdlY2THFqVzY0eC9zYW5kYm94L1dxUmhjZE1vVk5xZ09uMWhKQUZQRGstaW1nLTFfMTc3MTUzODY5NjAwMF9uYTFmbl9iV0Z5ZEdsdUxXZHlhV1F0WTI5MWNHeHBibWMuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=QrjdRRj~biYeai6Bn9qz9ash4~j~qHmbYMjxwBcNqqtCM4eDRu4cNiycgv0pq7SwzAnh9Pk8ZK0fOR~~mGnIUYcqnuIDARjNhd4NttpeotYcp9RZEptH4eebmUB6b0N4PxwKGnD~ntBn0-S7gElRzOyalQJp76ec7ZbofIqT~6ZCfU~LKRHUhkWg6tW2SfPf4DcSCCFZl-qSZynbjQmSy2Wjt3nDKHJEkhqiEE3~39jZSngNCsYyKDnSO6a1-7qsW3uAvWkuDt4Fueh8njRzpLBIEXhJ1RqfPwiB40ZNwzvkDFLR3Wl-D1q~0Ktd-eddmdZZtTqt5JWGCARXH9bNBA__"
        },
        {
          name: "Componentes de Transmisión",
          desc: "Poleas, sprockets y componentes de transmisión de potencia diseñados para aplicaciones de manejo de materiales.",
          image: "https://private-us-east-1.manuscdn.com/sessionFile/1aEaUseV5JVMvV6LqjW64x/sandbox/WqRhcdMoVNqgOn1hJAFPDk-img-2_1771538691000_na1fn_bWFydGluLXRyYW5zbWlzc2lvbi1jb21wb25lbnRz.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMWFFYVVzZVY1SlZNdlY2THFqVzY0eC9zYW5kYm94L1dxUmhjZE1vVk5xZ09uMWhKQUZQRGstaW1nLTJfMTc3MTUzODY5MTAwMF9uYTFmbl9iV0Z5ZEdsdUxYUnlZVzV6YldsemMybHZiaTFqYjIxd2IyNWxiblJ6LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=GqZdDCA52RAlUJFEUDczWXDfxGA9cT~lMhKFXaPndUveMiKpxC6aTJWZs32Q6W0i3WDZxHNlqhg~p~vax6hyu2WxRJDotkDoChouM5CrQEJL5UdHLKR8WGHNfvznROqWuhC7wqUEcBdLgLGCI0xs9BSAO-QRTft786nkEYoTKHUjPNPVg7f6Zi3X-RF6Ggumj6LxikpB-2wNQ55I0b~qJCO8lsovDiP5eLy9IiTF1lR9OqRrOyQQLh75z3uo0F0R5HJrpV8nfceVucTAS4DZTQ8rgIWpcKaTQJ7kcDq-qHTTjw0Dl6Ttu09jEecRtPGezia7ce3CZ1UWqekOiz1xrQ__"
        }
      ]
    },
    {
      id: "guardian",
      name: "Guardian Couplings",
      subtitle: "Acoplamientos Industriales",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/pETpKkMBMweaCFiH.png",
      products: [
        {
          name: "Acoplamientos Elastoméricos",
          desc: "Acoplamientos flexibles con elementos elastoméricos intercambiables para protección contra sobrecargas y vibraciones.",
          image: "https://private-us-east-1.manuscdn.com/sessionFile/1aEaUseV5JVMvV6LqjW64x/sandbox/mMVYOBwx8shUKDbhpKutSk-img-1_1771538761000_na1fn_Z3VhcmRpYW4tZWxhc3RvbWVyaWMtY291cGxpbmc.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMWFFYVVzZVY1SlZNdlY2THFqVzY0eC9zYW5kYm94L21NVllPQnd4OHNoVUtEYmhwS3V0U2staW1nLTFfMTc3MTUzODc2MTAwMF9uYTFmbl9aM1ZoY21ScFlXNHRaV3hoYzNSdmJXVnlhV010WTI5MWNHeHBibWMuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=NDZkyp11wpLxS7lbGkabOdPUoLiFqL-8OjWmd~dbYLwkxUTuLZxOUORWpx-RIjgmnuuddYOfc~6HsJVufDEjGqGx9YZ0oasxHMptFEOWWERKCEZzG7tYvYf5GJC4psbOj7u536uPbi6xGDV-spHbmhPWdNHvYdnZa~ECtOEJf7shQwgM3jsD5qt7t4wfM9h4zAUODX1~xwK~mksYe1lTWHZgdu6-z4tmgEMwACAlUwGXM6JN5LpHiA6MXQQuSMIiJTbqDGuAPmANW9-q7uqLiVlu9MGP8qgnXTk02MR-pJV5jZOCvUzhMVbmhAKATfYQ0LbbQFeV1YXIgHl53P63tQ__"
        },
        {
          name: "Acoplamientos de Disco",
          desc: "Acoplamientos de disco metálico para aplicaciones de alta velocidad y precisión con mínimo mantenimiento.",
          image: "https://private-us-east-1.manuscdn.com/sessionFile/1aEaUseV5JVMvV6LqjW64x/sandbox/mMVYOBwx8shUKDbhpKutSk-img-2_1771538760000_na1fn_Z3VhcmRpYW4tZGlzYy1jb3VwbGluZw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMWFFYVVzZVY1SlZNdlY2THFqVzY0eC9zYW5kYm94L21NVllPQnd4OHNoVUtEYmhwS3V0U2staW1nLTJfMTc3MTUzODc2MDAwMF9uYTFmbl9aM1ZoY21ScFlXNHRaR2x6WXkxamIzVndiR2x1WncuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=KBnfjI5bZb3XdXRJPv~pbUC86hsheJfmmvvZN8txPQX1sEc--O4eK~eCshOf5QalYLlh15WjxC7I6DhksUYVIONmbEe3dUFkEXX1UGZCCjjjsdH~NNqB1BBnUVU-dQhytIrsqnUEWOOtLd6bBM2T327A1xpi1A9tltVckf5N~wB-RW8IrnYOHJ7b1lGXs6eKnpQ7YJqxjRNv18sfInbY~K2mAfi6h9XfOvaHgUl~~dwtGaGqLvw4TiQXVULlscbu5W1xPrP3q8NZs-ISc8e4JaqcksTo8lwCQOwSydq9t0ODgsSA2LdoY4MOq-k7TKco2Ah-F80hA7ggoflrXGGV9A__"
        }
      ]
    },
    {
      id: "cornell",
      name: "Cornell Pump",
      subtitle: "Bombas Industriales",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/pttlvtBPwWasFfcg.png",
      products: [
        {
          name: "Bombas Centrífugas",
          desc: "Bombas centrífugas horizontales y verticales para aplicaciones de agua, aguas residuales y procesos industriales.",
          image: "https://private-us-east-1.manuscdn.com/sessionFile/1aEaUseV5JVMvV6LqjW64x/sandbox/OgBqrRGjn6iHmzN6cqiW76-img-1_1771538820000_na1fn_Y29ybmVsbC1jZW50cmlmdWdhbC1wdW1w.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMWFFYVVzZVY1SlZNdlY2THFqVzY0eC9zYW5kYm94L09nQnFyUkdqbjZpSG16TjZjcWlXNzYtaW1nLTFfMTc3MTUzODgyMDAwMF9uYTFmbl9ZMjl5Ym1Wc2JDMWpaVzUwY21sbWRXZGhiQzF3ZFcxdy5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=P34ai7ROWd13A5cllD2lygJiR4HMYhH77CD36bJ7xaek~TaLjXt5F408ARC3R3ICQ2lbeuqJJ~kMvGccVrdINsUzG1iQXzCvC-DHt7I-pX3Gp4mIE2hxX0C91KLjt~GC-Yc5te-AXMXxcNIGU2hds7xNgNnlgFG7GTe6S67ygQ6hIGhzyzHEkw-dNmEsmhXIZH45vID3bjDOI9h7SAsaqHhysjBOH~JuYbE~qXNuQrFszH1KENtimsMLF39tCwqM4jO2sIKdk2ujsCE08qzkXp0FPjT-wxZw1uarZZ29mg8wW9QoWr2Z8LIyIGQiIBsOLba-GL8ILMkL9~wWpakqKg__"
        },
        {
          name: "Bombas de Proceso",
          desc: "Bombas diseñadas para manejo de líquidos corrosivos y abrasivos en aplicaciones industriales exigentes.",
          image: "https://private-us-east-1.manuscdn.com/sessionFile/1aEaUseV5JVMvV6LqjW64x/sandbox/OgBqrRGjn6iHmzN6cqiW76-img-2_1771538824000_na1fn_Y29ybmVsbC1wcm9jZXNzLXB1bXA.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMWFFYVVzZVY1SlZNdlY2THFqVzY0eC9zYW5kYm94L09nQnFyUkdqbjZpSG16TjZjcWlXNzYtaW1nLTJfMTc3MTUzODgyNDAwMF9uYTFmbl9ZMjl5Ym1Wc2JDMXdjbTlqWlhOekxYQjFiWEEuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=r4GHbYeMzZKO72H3lVEth~5ORhmbiFtd4Li6Fl~n6y9KiC4BOjfG5e-1nuZABZQhXn9x5ynnC82KcXWyHTTmoY7ziIZYW79PLHDF0GWyQuZvvtA13qqczD9qQKyOsJPeXLQUxozdL50Jgw1inwKBBvkTV0eaLnX9IollBqL2KTQerZq~Km1bLmBUaesOo4uqcdPgHkrweaJztqYDVwvHHP6Z8eIomC7thdSmNxbTNr9so9QZqPD-7wz4g3j8ekpOrgoHJrYepaUPBkZt5fD0tIM5U4OP2kFHpiyYE47hLRQ2yY1e9Vm~Yw1l3l5RYt4pPjgm5ZXWb319x3YJq69I5A__"
        }
      ]
    },
    {
      id: "roper",
      name: "Roper Pumps",
      subtitle: "Bombas de Desplazamiento Positivo",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/NsUVdBHsihhxpAnC.png",
      products: [
        {
          name: "Bombas de Engranajes",
          desc: "Bombas de engranajes internos para manejo de líquidos viscosos, aceites y productos químicos con flujo constante.",
          image: "https://private-us-east-1.manuscdn.com/sessionFile/1aEaUseV5JVMvV6LqjW64x/sandbox/bs1v6UVp1GuqO7Ru3TLN4t-img-1_1771538881000_na1fn_cm9wZXItZ2Vhci1wdW1w.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMWFFYVVzZVY1SlZNdlY2THFqVzY0eC9zYW5kYm94L2JzMXY2VVZwMUd1cU83UnUzVExONHQtaW1nLTFfMTc3MTUzODg4MTAwMF9uYTFmbl9jbTl3WlhJdFoyVmhjaTF3ZFcxdy5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=B8FH0S1zCHpAQgWsCmCPskDUi~FZd2RKZZKw5aW7EkyzJetpq9p1RCz4zgAxJRtWH5c1lwlw5ny382e~41GB~r2iKEvDdO-V9MAAZ7a4nYzKpe2C3k76nGAAFyNQjwM7LJGfoB8Q3o~E15~cES-ljydpWFuVNgOXv-t1UvWN~rkREcvPloflpQKDdW5sc3kdP4~1sxYypyDJWEPTJDFk-38SvqZ1eMX5Kwef4Ro9djHKU8qJ34Iy4UV0Cmr7qvSRhL98dEoe1-Wgs1kTqTgJ8vbizw-EVXsWnCOagQdXnj6t6niBWrqdMaCeTeyXiFzFktK0UY-OARL5hIEjbRMAWA__"
        },
        {
          name: "Bombas Rotativas",
          desc: "Bombas de desplazamiento positivo tipo rotor para transferencia de fluidos con alta precisión volumétrica.",
          image: "https://private-us-east-1.manuscdn.com/sessionFile/1aEaUseV5JVMvV6LqjW64x/sandbox/bs1v6UVp1GuqO7Ru3TLN4t-img-2_1771538889000_na1fn_cm9wZXItcm90YXJ5LXB1bXA.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMWFFYVVzZVY1SlZNdlY2THFqVzY0eC9zYW5kYm94L2JzMXY2VVZwMUd1cU83UnUzVExONHQtaW1nLTJfMTc3MTUzODg4OTAwMF9uYTFmbl9jbTl3WlhJdGNtOTBZWEo1TFhCMWJYQS5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=vfV5kYXQcH2x6~qnAGSPA3M77WYRWPjITW1CZDo7wuDrDrt6wai25FMiLa5rv1tyAnqTynMWnt5o7EHsahs5wJyrr~lBnq-Ke8DIXiDtI5wCfr7lK-Qp29dUcGwj-5SPMVfqFnBmoFs4g9UGZbr52YR~J4rMC96HFFISutgE~PUpbgihRrO00IR-pYvtvcqrxv0WQ2TtV0ApEDOId0KB2bPdSH8yWX-PO~FZz4az-GbPUKPFek6BT7QVy0vg3k4Yetp7Sfm~JrJExp2fPl4VnHAUeTUHg68oZnIrbiprp5K3Ox880CW-0bMy8IEK61oFnf3jzBMrnp5ANe7PL124pw__"
        }
      ]
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Sistemas de Propulsión Industrial | Grupo Topke Guatemala</title>
        <meta name="description" content="Distribuidores autorizados de sistemas de propulsión industrial: DODGE, SEW EURODRIVE, Regal Rexnord, Martin, Guardian Couplings, Cornell y Roper Pumps en Guatemala." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
        <div className="absolute inset-0 bg-[url('https://private-us-east-1.manuscdn.com/sessionFile/1aEaUseV5JVMvV6LqjW64x/sandbox/0Fpmc8ZVKTJtsR5OII3OBW-img-1_1771537860000_na1fn_cHJvcHVsc2lvbi1oZXJvLWJyYW5kcw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMWFFYVVzZVY1SlZNdlY2THFqVzY0eC9zYW5kYm94LzBGcG1jOFpWS1RKdHNSNU9JSTNPQlctaW1nLTFfMTc3MTUzNzg2MDAwMF9uYTFmbl9jSEp2Y0hWc2MybHZiaTFvWlhKdkxXSnlZVzVrY3cuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=iWbgVhgemvZR51CG8T71EaimMCs-p~7njboH-j7KB03qPL54ou94JGJKHnmQUMGQwGnd6Hdcopl0mKgcuuPXGyloQmdT6NOiHmkrEvUqZiGBTHCRjTA3jL1QEmLZIp3m~4X5N6cQUaBwilPm2E7BTh7-7vKE-yDUMdCfLdlFU3cvCsMlh4N4Aa3pjSWR~nlWtqyRaf3~FMLFCR4tDCu-3v5OjFpIas~EiZd3K6-AtSP-GqjOX7ObQSR7pdfkPbKUbx-JBKLgjncpPKlTJVXbiMTY0cB2hzIJhWcUMDNlx~Z-vltBp5-Y1a~4ltMO-CJ0rPiOA2I0VN-EAu-cTbrg6Q__')] bg-cover bg-center opacity-20"></div>
        
        <div className="container relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-zinc-100 to-zinc-300 bg-clip-text text-transparent">
              Sistemas de Propulsión Industrial
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-300 mb-8 leading-relaxed">
              Soluciones completas de transmisión de potencia con las marcas líderes de la industria
            </p>


          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Nuestras Marcas</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Representamos las marcas más confiables en sistemas de propulsión y transmisión de potencia
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedCategory(category)}
                className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-red-600/50 transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-red-600/10"
              >
                <div className="aspect-[4/3] overflow-hidden bg-white">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-red-600 transition-colors">
                    {category.name}
                  </h3>
                  {category.subtitle && (
                    <p className="text-muted-foreground mb-4">{category.subtitle}</p>
                  )}
                  <Button variant="ghost" className="gap-2 group-hover:gap-3 transition-all">
                    Ver Productos
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal de Productos */}
      <AnimatePresence>
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCategory(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-border"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-card/95 backdrop-blur-sm border-b border-border p-6 flex items-center justify-between z-10">
                <div>
                  <h3 className="text-3xl font-bold">{selectedCategory.name}</h3>
                  {selectedCategory.subtitle && (
                    <p className="text-muted-foreground mt-1">{selectedCategory.subtitle}</p>
                  )}
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedCategory(null)}
                  className="rounded-full"
                >
                  <span className="text-2xl">×</span>
                </Button>
              </div>

              <div className="p-6 space-y-6">
                {selectedCategory.products.map((product, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-background rounded-xl p-6 border border-border hover:border-red-600/50 transition-colors"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-48 object-contain rounded-lg bg-white"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <h4 className="text-2xl font-bold mb-3">{product.name}</h4>
                        <p className="text-muted-foreground leading-relaxed">{product.desc}</p>
                        <Button 
                          className="mt-4 bg-red-600 hover:bg-red-700"
                          onClick={() => window.open('https://wa.me/50222248080?text=Hola,%20me%20interesa%20solicitar%20cotización%20para%20' + encodeURIComponent(product.name), '_blank')}
                        >
                          Solicitar Cotización
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


    </Layout>
  );
}
