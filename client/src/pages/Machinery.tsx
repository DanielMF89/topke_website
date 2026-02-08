import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Hammer, Truck, HardHat, Ruler, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Definición de tipos para las categorías y productos
type Product = {
  name: string;
  desc: string;
  image: string;
};

type Category = {
  id: string;
  name: string;
  subtitle?: string; // Nuevo campo opcional para el subtítulo
  image: string;
  products: Product[];
};

export default function Machinery() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const categories: Category[] = [
    {
      id: "excavadoras",
      name: "Excavadoras",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/VnfsNHwNkFKkYhiM.jpg",
      products: [
        {
          name: "Excavadora XE60G",
          desc: "Peso Operativo: 6T | Motor: Kubota | Líneas para implementos | Cucharón: 0.26m³ | Cabina cerrada con A/C | Cuchilla topadora",
          image: "https://private-us-east-1.manuscdn.com/sessionFile/1aEaUseV5JVMvV6LqjW64x/sandbox/O98QFSuhLtJNpEnKi76Zza-img-4_1770402077000_na1fn_eGU2MGctd29ya2luZw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMWFFYVVzZVY1SlZNdlY2THFqVzY0eC9zYW5kYm94L085OFFGU3VoTHRKTnBFbktpNzZaemEtaW1nLTRfMTc3MDQwMjA3NzAwMF9uYTFmbl9lR1UyTUdjdGQyOXlhMmx1WncuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=tzGF476hHCscSQoQlJgHnaOScHUJGXd6HwjSt8xUOid40YNjqv~bW~yXAaD-y7PprBLJ8zcHnjzjnURq9qqfwo8nj0pFDc00QP1D7E71ekyjhZioH1-S6z0q78gpnnmZMYY3zD1rvyz9KXluz9dJ~SXU3EAs2jTScrT2MxyRBkD6P7AKm~fP7ws9783oHodrdDjaHopLtNjVu9dKC2pStuv0XPfcmRTWHCwxSYUf7-N9CqcElZttdZaZBz7SZKU~A~QOXfDoGcqMBa~dwZS2c8u-wGvlLgx2UNSxHU2TImGzaiHhHq2jkF8xOEFeHBpcSU5fbbV6TIEQxc9OncArFQ__"
        },
        {
          name: "Excavadora XE135G",
          desc: "Peso Operativo: 13.5T | Motor: Cummins QSF3.8 | 115 hp | Cucharón: 0.55m³ | Líneas para martillo | Zapata 500mm",
          image: "https://private-us-east-1.manuscdn.com/sessionFile/1aEaUseV5JVMvV6LqjW64x/sandbox/O98QFSuhLtJNpEnKi76Zza-img-5_1770402078000_na1fn_eGUxMzVnLXdvcmtpbmc.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMWFFYVVzZVY1SlZNdlY2THFqVzY0eC9zYW5kYm94L085OFFGU3VoTHRKTnBFbktpNzZaemEtaW1nLTVfMTc3MDQwMjA3ODAwMF9uYTFmbl9lR1V4TXpWbkxYZHZjbXRwYm1jLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=S1mmUIGbwb-PK-zuNv2JOsLHDeDy81cSOpkZKBo6dAP4qlR3lx-spYalFUOWz0ut9mSfCuGSijGOcLxs6VooPNJD0TwbodaVr58IdtyDVzWAEXkbcXQvpe286C96VaTS5sDN4y6VckcCetBh6NG2KvukqtPCTU1OLMwW4zy93Xhpzdz5n~ksKS6HxrYj5FM2fvRCJfUDfdu7xWxeptR4tYk45Zk9tnnB-pvKzdjVWWcsAQk0rMjGll3oa9R1juRA~RJ7sdCwDWsCOzkVqmnSXOmkcSWEkJtAaC6tQbEjwV2RJTuhNIjB0BS7Vx7NvQUOpDQGong8RvP8OxjHlRrG6A__"
        },
        {
          name: "Excavadora XE215G",
          desc: "Peso Operativo: 21.8T | Motor: Cummins QSF6.7 | 180 hp | Cucharón: 1m³ | Líneas para martillo | Zapata 800mm",
          image: "https://private-us-east-1.manuscdn.com/sessionFile/1aEaUseV5JVMvV6LqjW64x/sandbox/z9VnekxWyzinJO6R7ITYzL-img-1_1770402158000_na1fn_eGUyMTVnLXdvcmtpbmc.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMWFFYVVzZVY1SlZNdlY2THFqVzY0eC9zYW5kYm94L3o5Vm5la3hXeXppbkpPNlI3SVRZekwtaW1nLTFfMTc3MDQwMjE1ODAwMF9uYTFmbl9lR1V5TVRWbkxYZHZjbXRwYm1jLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=fPvRLQ1ZtoEGhp~SrnVgXEpbBJ2sDq26ruAWka2pdxfwHoRj-NU49yIxa9TpTDjpBC9O2rZoEKIrl-UY2byAmj5heLiqGjRibgLNSuHJ2V5VVbM5BoDryLkOJZx8rbJF0rnl-8s0h93DigsWLbAnsPLr9OYEuLCsze5roTbAeADkMkk2MvtRI6Hca7T8E920kESS1Nd0B~Zxwe-HKQrgSbtZ0Vl-fvx2fZJ~HKC4PTMixfPqRPpbvQ7hfx~LH60RR7GIeSGsu3EyBYd3NzyyKktuqRxSQ~MqyHhbPXo2Y2r5MiL2morcCtBXUuLg~Od04gVh74xMmnh681-7STifsA__"
        }
      ]
    },
    {
      id: "mini-excavadoras",
      name: "Mini Excavadoras",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/1aEaUseV5JVMvV6LqjW64x/sandbox/O98QFSuhLtJNpEnKi76Zza-img-3_1770402069000_na1fn_eGUzNXUtd29ya2luZw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMWFFYVVzZVY1SlZNdlY2THFqVzY0eC9zYW5kYm94L085OFFGU3VoTHRKTnBFbktpNzZaemEtaW1nLTNfMTc3MDQwMjA2OTAwMF9uYTFmbl9lR1V6TlhVdGQyOXlhMmx1WncuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=TTFGYXAxjfujM7Gh9llB0eWaYBOAgNJBNTpxy6UBaBJgBI178zw-NvMgJ3l~WAQp-aTDCegBi7aTgweicR36eAOMQjiIKHv8mcI0Q8cfwaIxUIxw310XInMDrygD-iHOprf2gDG8DcpjJGwTKnuTOT8A8-vphl8FL-GDyvvFoHpVVil8P2a61d4-4X-vdN6xEIpspzV8So0S~wJsZOX-5tzwxIMkWHGebpresMZZKYssCmeKS~~U2qZPAl4dASPjLkktECLCTHZ6hkVEqzX1TEAq5D~8i0340sB~PaAtu-IKsf6Ks7KDY8V-Q3dibB1tASM2nQ2OxUWKuGvVMnLkiQ__",
      products: [
        {
          name: "Mini Excavadora XE17U",
          desc: "Peso Operativo: 1.7T | Motor: Kubota | Líneas para implementos | Banda de hule/metal | Banda retráctil",
          image: "https://private-us-east-1.manuscdn.com/sessionFile/1aEaUseV5JVMvV6LqjW64x/sandbox/YiueiBbAlppPu4rBtoq2CE-img-1_1770403653000_na1fn_eGUxN3Utd29ya2luZy12Mw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMWFFYVVzZVY1SlZNdlY2THFqVzY0eC9zYW5kYm94L1lpdWVpQmJBbHBwUHU0ckJ0b3EyQ0UtaW1nLTFfMTc3MDQwMzY1MzAwMF9uYTFmbl9lR1V4TjNVdGQyOXlhMmx1WnkxMk13LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=fyaBHMF9FdVlUEdIOk1eL46wfbWYFZTqs7Eae2d2VyDRA7ayK9p95Es1j3PktOEwracfM1AQXJo6szu2z8w9CqJ~mDHVlcXOTFDzIIajRGetE8PzzF9eSqIA6OPspATMC4TwQJ-vK4k961JU1xS5dc4s9~MdOF20eWgZpyUeakxQbQ3-3VAkHIlO8mECw~vXV5O~fmRG1c8wwSjbDK4hfnvxk4DajpCt5-EB37VqHVxjUAnoAALQEknJCONzKlfEScYX3QBiviuuJnLWsDHpgvMydEXnyQvC1sYieUADCw93Z17JDhjnbr4vs2ZmVZkvJVWxLugbWvFb~z7ejWCI~g__"
        },
        {
          name: "Mini Excavadora XE27U",
          desc: "Peso Operativo: 2.7T | Motor: Kubota | Líneas para implementos | Banda de metal | Cuchilla topadora",
          image: "https://private-us-east-1.manuscdn.com/sessionFile/1aEaUseV5JVMvV6LqjW64x/sandbox/YiueiBbAlppPu4rBtoq2CE-img-2_1770403649000_na1fn_eGUyN3Utd29ya2luZy12Mw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMWFFYVVzZVY1SlZNdlY2THFqVzY0eC9zYW5kYm94L1lpdWVpQmJBbHBwUHU0ckJ0b3EyQ0UtaW1nLTJfMTc3MDQwMzY0OTAwMF9uYTFmbl9lR1V5TjNVdGQyOXlhMmx1WnkxMk13LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=rtHzeLqlwUQZGav8Y0B8BTEx3hBC4tMWFxlbroQLQGDxROLxM3PdhKxoOpuzVShYb4E1FzmkLSaisw04Dfn7axeSdZG-LwutEzfJpDhu7Y8LHHvk6VIOPGGUYXeEpAc~iv3EA~m5V4JopPh1VMwT1wm6WUCzDNYYjmNujOAAKqcNolv46nwyJMICpDl5UpxFsTDNTIntEijgpYLrmeV8quolNs2eGBlnlfxJl11pJKcNwKW3XGaXTm6POyYkQSiw2ECj0TeFdkpDW-~tIJGtwmiIJHyO~KVCFrv8kIgeaore9G4BsAFdGAdeTzeRwtnvhBeNsLQ6Erq2WNhp91RIrg__"
        },
        {
          name: "Mini Excavadora XE35U",
          desc: "Peso Operativo: 3.5T | Motor: Kubota | Cabina cerrada con A/C | Banda de metal | Líneas para implementos | Cuchilla topadora",
          image: "https://private-us-east-1.manuscdn.com/sessionFile/1aEaUseV5JVMvV6LqjW64x/sandbox/YiueiBbAlppPu4rBtoq2CE-img-3_1770403655000_na1fn_eGUzNXUtd29ya2luZy12Mw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMWFFYVVzZVY1SlZNdlY2THFqVzY0eC9zYW5kYm94L1lpdWVpQmJBbHBwUHU0ckJ0b3EyQ0UtaW1nLTNfMTc3MDQwMzY1NTAwMF9uYTFmbl9lR1V6TlhVdGQyOXlhMmx1WnkxMk13LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=HOZbA~zB2eRdomZaMZuWnIHmfwWJwTPwuIhovP7tviwzdhAMRgNMtSsRK7dmGWWLnnhdXSupXbzJsGvDz~ekoiGvub1vee1dhgM9hKaNkyu-1pmzjxbFqZt2R3J1fqS4v9M2xx7M5l~i8~YVLG~D5oWF1oqvfsSYr4m4WEeaNi3mh46m9SCc4Hs~NzcgUHybB1wab~9PzyFd1WhVtwmlEYV16GRISAHPfl45r0Lu5MmPwrXZEb60QD-r6ryKvu8YLqU1WSxnBLGV1AgwTop-V6P9b~n1qCdXgIv3LRkmitsnCY5MpmHlUaAZqJkQp0mr5kCM1-ssd6wNMIPxcH6NhQ__"
        }
      ]
    },
    {
      id: "cargadores",
      name: "Cargadores Frontales",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/1aEaUseV5JVMvV6LqjW64x/sandbox/z9VnekxWyzinJO6R7ITYzL-img-5_1770402161000_na1fn_eGM5NTgtd29ya2luZw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMWFFYVVzZVY1SlZNdlY2THFqVzY0eC9zYW5kYm94L3o5Vm5la3hXeXppbkpPNlI3SVRZekwtaW1nLTVfMTc3MDQwMjE2MTAwMF9uYTFmbl9lR001TlRndGQyOXlhMmx1WncuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=sI20qUpcvL04M7VTlMYn08FwsNHZQIoHdnxGIwl0UviiW0YUqrwX87ecHk7BHMngzpvNtEMvA7stNxEBkI~kOCZT7cREiySHC9m5GLCuS0qO8ZUtrWtTy1GnovCG~4Cz5rhMhdLdYQs7s9iX~HFEvr4BVjqzZNXLSHblmAP2Hwp7UZHzLgR8vlc5vhwjVOpfwpZxPQNYczAlye~2Ywdg6FJEXNPW2EvBumBGMgZIGh9ieEvM3MgTv7M4nvlrr6S4kPFkxqshqGAcvgfeaP1G24EVJS1VPTt~mgGU7ZJF1bMIRBhhUmZAtjEOaN-I5CFoihL6~PmEE~JTSHV8Xt91iQ__",
      products: [
        {
          name: "Minicargador XC7-SR08",
          desc: "Motor: Yanmar 67hp | Peso Operativo: 3.5T | Capacidad cucharón: 0.45m³ | Líneas alto flujo | Capacidad carga: 2,000 lbs | Cabina cerrada con A/C",
          image: "https://private-us-east-1.manuscdn.com/sessionFile/1aEaUseV5JVMvV6LqjW64x/sandbox/z9VnekxWyzinJO6R7ITYzL-img-2_1770402145000_na1fn_eGM3LXNyMDgtd29ya2luZw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMWFFYVVzZVY1SlZNdlY2THFqVzY0eC9zYW5kYm94L3o5Vm5la3hXeXppbkpPNlI3SVRZekwtaW1nLTJfMTc3MDQwMjE0NTAwMF9uYTFmbl9lR00zTFhOeU1EZ3RkMjl5YTJsdVp3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=IvG-7IAvha~Nv~qOVu-0X9-y8~H~OvLyBW~skfl~hwe9~xlYN3SNcsznrNkYrbTmqXoEaiExs-D865oOFvmM4U4taCMS-lkyaLHaTIkJHcyrET3tx3cSleIRkc7ms4PuqZFXQhBPK2CJbGl5ZfKi5wK~r3tsKZV75URUQ5WtT3tneb5TK0Xi2NP8iloFz7Ggje39NGYF9zxrSPYhwQ57u0usoWpmuDUhKAe5rZlb2zXdnW5dRuk4SR15fcDuJ9DGP40ITVgcblKNjiAeZx-7dRLBADm1E~UKSrvtiSIqV9xdB6h8nRQlBNHFMzTNARstqb-q4kfy1BUpTAn-4snoUg__"
        },
        {
          name: "Cargador LFW180",
          desc: "Motor: Yuchai 85hp | Peso Operativo: 6,200 kg | Capacidad carga: 1.8T | Capacidad cucharón: 1m³ | Líneas acople rápido",
          image: "https://private-us-east-1.manuscdn.com/sessionFile/1aEaUseV5JVMvV6LqjW64x/sandbox/z9VnekxWyzinJO6R7ITYzL-img-3_1770402158000_na1fn_bGZ3MTgwLXdvcmtpbmc.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMWFFYVVzZVY1SlZNdlY2THFqVzY0eC9zYW5kYm94L3o5Vm5la3hXeXppbkpPNlI3SVRZekwtaW1nLTNfMTc3MDQwMjE1ODAwMF9uYTFmbl9iR1ozTVRnd0xYZHZjbXRwYm1jLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=UOGpT~vFJu70L879ka6YA-NBh46Zztdul3xtWU9emXI9YIVfbXAm-9Z9RYyt7e6uiBrP3B75S4Qlh3KCZveeVVnqlefHRxjyWtDlXT0OcnR4T74WYTEfAeGO14~59nd0DKUBsY2ML82OvS-Hk3NY6W7COHl~YXD4fhyRI-XdHB0SRezPW2K3ky3esBhJSogrcHNa~~Noat6FOTUEoSUm~LenOe~qSvBiJX3KXQovP0vl~VrHM6ibSQXg9-wan~qspHM9nZ0D1lkJIJBX1bfkqIqIeJlUyQaG~BpP6VADGer93FDzgYzPu3CorMdxEJuzR~D2fvH0SaUIHj34FMz-Hg__"
        },
        {
          name: "Cargador XC938",
          desc: "Motor: Weichai 6 cilindros 134hp | Peso Operativo: 10,300 kg | Capacidad carga: 3,500 kg | Cucharón: 2.1m³ | Frenos discos húmedos",
          image: "https://private-us-east-1.manuscdn.com/sessionFile/1aEaUseV5JVMvV6LqjW64x/sandbox/z9VnekxWyzinJO6R7ITYzL-img-4_1770402167000_na1fn_eGM5Mzgtd29ya2luZw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMWFFYVVzZVY1SlZNdlY2THFqVzY0eC9zYW5kYm94L3o5Vm5la3hXeXppbkpPNlI3SVRZekwtaW1nLTRfMTc3MDQwMjE2NzAwMF9uYTFmbl9lR001TXpndGQyOXlhMmx1WncuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Hh~xJPuuaeYD2XvNxISTVX6T6HOV46MtwOdH0-Bq5QoHfOz0qaKrqoPnH5JKiqjL-R9AuTikB63jOuuYnIYzBkJDpUwUipKTbXw6~wJfW~sSofxDO5LC-QIbJ5XrnnnHzGmAEJlX~X3XxMIi~3DxI6HulJ1ic5G88xiZLUMepl~OFO2WRhUmD92tG8P~Mitb3xk6yJeXaY1JRvWJkCS2Ah6arZpwD7S6-60Rje9J~uBML3a35jwDnlXj~waCTHZQywOg2p6aeogZpy06FCN608tDtlLu3efYm7KVow5efTX4bklhIqdQKnaAxPVbIW~az3MHbbOk3qehqLvvvKM8aQ__"
        },
        {
          name: "Cargador XC958",
          desc: "Motor: Weichai 6 cilindros 217hp | Peso Operativo: 16,950 kg | Capacidad carga: 5,500 kg | Cucharón: 3m³ | Frenos discos húmedos",
          image: "https://private-us-east-1.manuscdn.com/sessionFile/1aEaUseV5JVMvV6LqjW64x/sandbox/z9VnekxWyzinJO6R7ITYzL-img-5_1770402161000_na1fn_eGM5NTgtd29ya2luZw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMWFFYVVzZVY1SlZNdlY2THFqVzY0eC9zYW5kYm94L3o5Vm5la3hXeXppbkpPNlI3SVRZekwtaW1nLTVfMTc3MDQwMjE2MTAwMF9uYTFmbl9lR001TlRndGQyOXlhMmx1WncuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=sI20qUpcvL04M7VTlMYn08FwsNHZQIoHdnxGIwl0UviiW0YUqrwX87ecHk7BHMngzpvNtEMvA7stNxEBkI~kOCZT7cREiySHC9m5GLCuS0qO8ZUtrWtTy1GnovCG~4Cz5rhMhdLdYQs7s9iX~HFEvr4BVjqzZNXLSHblmAP2Hwp7UZHzLgR8vlc5vhwjVOpfwpZxPQNYczAlye~2Ywdg6FJEXNPW2EvBumBGMgZIGh9ieEvM3MgTv7M4nvlrr6S4kPFkxqshqGAcvgfeaP1G24EVJS1VPTt~mgGU7ZJF1bMIRBhhUmZAtjEOaN-I5CFoihL6~PmEE~JTSHV8Xt91iQ__"
        }
      ]
    },
    {
      id: "compactacion",
      name: "Compactadoras y Niveladoras",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/1aEaUseV5JVMvV6LqjW64x/sandbox/k87X9a8RlbQ9XvxhbtzaPg-img-1_1770402232000_na1fn_eHMxMTMtd29ya2luZw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMWFFYVVzZVY1SlZNdlY2THFqVzY0eC9zYW5kYm94L2s4N1g5YThSbGJROVh2eGhidHphUGctaW1nLTFfMTc3MDQwMjIzMjAwMF9uYTFmbl9lSE14TVRNdGQyOXlhMmx1WncuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=HDKavTcy1DT7F2-tT6rYC9COhvt-YH-ahBoPXQPJMa8sJAkwjYqMqZF4Gz9D9IwgtQtli2vKTZabouV9lbTSz~Dor2oM2tCjXF72V7bQWocShZVhZ44uSwGDeUdHBsC1~TbY7olWLzlBUmHAPx-js2BNX3A65LWULXVSdyOWRcPvGRwixjrrbjGOHfByZrYYXhmqes38C3YkK0VszmbwBAq0uz2zN0zj33i5QANdwH7-EGdjSCkIFBH44cUhqlFqda01JW4zUcdeyktDavmK46vxWnPO3gZM5jocI0mDAyYsvM5sRiDLqtmolBWvJXjQbDe5ij0-xuqHzdJ-gBImUg__",
      products: [
        {
          name: "Rodo Compactador XS113",
          desc: "Motor: Cummins 4BT 124hp | Peso Operativo: 10,800 kg | Cabina cerrada con A/C | Frecuencia vibración: 30/35 Hz | Diámetro tambor: 1513mm",
          image: "https://private-us-east-1.manuscdn.com/sessionFile/1aEaUseV5JVMvV6LqjW64x/sandbox/k87X9a8RlbQ9XvxhbtzaPg-img-1_1770402232000_na1fn_eHMxMTMtd29ya2luZw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMWFFYVVzZVY1SlZNdlY2THFqVzY0eC9zYW5kYm94L2s4N1g5YThSbGJROVh2eGhidHphUGctaW1nLTFfMTc3MDQwMjIzMjAwMF9uYTFmbl9lSE14TVRNdGQyOXlhMmx1WncuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=HDKavTcy1DT7F2-tT6rYC9COhvt-YH-ahBoPXQPJMa8sJAkwjYqMqZF4Gz9D9IwgtQtli2vKTZabouV9lbTSz~Dor2oM2tCjXF72V7bQWocShZVhZ44uSwGDeUdHBsC1~TbY7olWLzlBUmHAPx-js2BNX3A65LWULXVSdyOWRcPvGRwixjrrbjGOHfByZrYYXhmqes38C3YkK0VszmbwBAq0uz2zN0zj33i5QANdwH7-EGdjSCkIFBH44cUhqlFqda01JW4zUcdeyktDavmK46vxWnPO3gZM5jocI0mDAyYsvM5sRiDLqtmolBWvJXjQbDe5ij0-xuqHzdJ-gBImUg__"
        },
        {
          name: "Motoniveladora GR180",
          desc: "Motor: Cummins 6 cilindros 190hp | Peso Operativo: 15,400 kg | Cabina cerrada con A/C | Ripper trasero 5 dientes | Cuchilla 12 pies | Velocidades: 6 adelante 3 atrás",
          image: "https://private-us-east-1.manuscdn.com/sessionFile/1aEaUseV5JVMvV6LqjW64x/sandbox/k87X9a8RlbQ9XvxhbtzaPg-img-2_1770402240000_na1fn_Z3IxODAtd29ya2luZw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMWFFYVVzZVY1SlZNdlY2THFqVzY0eC9zYW5kYm94L2s4N1g5YThSbGJROVh2eGhidHphUGctaW1nLTJfMTc3MDQwMjI0MDAwMF9uYTFmbl9aM0l4T0RBdGQyOXlhMmx1WncuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=nCOa1WaVRRlAxnYKCCGNKLSTx055hQHfE6blQjJ9TN0k2nKCEe7I5xM~EYyNL4QdgGCn42hbWnsuVPAmU3Xvi5YmX4a9AajoNvSizvjDyLG3PNe4c-XdiCjWTkXjl~GaaCEXqpH70V9GSxA3ydYvPUWYz95lyj2fhZAoWtJdhZocxg8Ok4oZuwKvo1iEGCEOKTqkViLj7SHAk6I~UxAH1AdZkvWLMT9b8gDDckBcYBOoww07l4C4AilbWwRXVx~e53J9JCNC7NtrI9Yh4czVnLsRQuZsJ0gqKi-GnMWrK70qpheZbTDCsaImv4ImLRCsTPHgdM2XXuM7jiHcGdGn1g__"
        }
      ]
    },
    {
      id: "retroexcavadoras",
      name: "Retroexcavadoras",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/1aEaUseV5JVMvV6LqjW64x/sandbox/O98QFSuhLtJNpEnKi76Zza-img-4_1770402077000_na1fn_eGU2MGctd29ya2luZw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMWFFYVVzZVY1SlZNdlY2THFqVzY0eC9zYW5kYm94L085OFFGU3VoTHRKTnBFbktpNzZaemEtaW1nLTRfMTc3MDQwMjA3NzAwMF9uYTFmbl9lR1UyTUdjdGQyOXlhMmx1WncuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=tzGF476hHCscSQoQlJgHnaOScHUJGXd6HwjSt8xUOid40YNjqv~bW~yXAaD-y7PprBLJ8zcHnjzjnURq9qqfwo8nj0pFDc00QP1D7E71ekyjhZioH1-S6z0q78gpnnmZMYY3zD1rvyz9KXluz9dJ~SXU3EAs2jTScrT2MxyRBkD6P7AKm~fP7ws9783oHodrdDjaHopLtNjVu9dKC2pStuv0XPfcmRTWHCwxSYUf7-N9CqcElZttdZaZBz7SZKU~A~QOXfDoGcqMBa~dwZS2c8u-wGvlLgx2UNSxHU2TImGzaiHhHq2jkF8xOEFeHBpcSU5fbbV6TIEQxc9OncArFQ__",
      products: [
        {
          name: "Retroexcavadora CX8-C2570",
          desc: "Motor: Cummins QSF3.8 99hp | Peso Operativo: 7,600 kg | Cabina cerrada con A/C | Brazo extensible | Líneas para martillo | Tracción 4x4 | Cucharón frontal: 1m³ | Cucharón trasero: 0.23m³",
          image: "https://private-us-east-1.manuscdn.com/sessionFile/1aEaUseV5JVMvV6LqjW64x/sandbox/EulgrLn1pOj4foe7cy0nns-img-1_1770404329000_na1fn_Y3g4LWMyNTcwLXdvcmtpbmctdjI.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMWFFYVVzZVY1SlZNdlY2THFqVzY0eC9zYW5kYm94L0V1bGdyTG4xcE9qNGZvZTdjeTBubnMtaW1nLTFfMTc3MDQwNDMyOTAwMF9uYTFmbl9ZM2c0TFdNeU5UY3dMWGR2Y210cGJtY3RkakkuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=cS3Td2mSmq1OsddkvlWmY-RHPFIhQ1EXEPjAYjs-Wt6F7CQYZOAIZIqaRuyTvEvr73Boo7sAt9gagA-Ix0hHeWwxChBUUGEZyJVaiqVtAsMN-dIlhttENPL0kMd2XsrlEQiTtn90cbV3yfMyODOTzrXN3uyi5n~bboNn7LxyL5cEjGaG6ydGYTvUfEpFgQXK75jaACD9l0Jg5cx0rtL5h97JuvF-yo7cukGaFr~iEFdTvJz5IV1WwzgnNiCqFZ324UHczvlKfFxV3zjTS2GFySX1aJDrhSpBNC5XtLfc2p1UpLogizuIHOwq2ucLlsk4FnWgEfrgTPYk-EwfbkVfZQ__"
        }
      ]
    },
    {
      id: "elevacion",
      name: "Equipos de Elevación",
      subtitle: "Torres Grúa y Camiones Grúa XCMG",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/GDOIMUUnqEwDUCDe.jpg",
      products: [
        {
          name: "Torres Grúa XCMG",
          desc: "Alturas: 40m-200m | Tipos: Topless, Luffing | Tonelaje: 6t-25t | Pluma: 53m-75m | Estacionarias y autoerigibles",
          image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/GDOIMUUnqEwDUCDe.jpg"
        },
        {
          name: "Camiones Grúa XCMG",
          desc: "Tonelaje: 10t-230t | Pluma telescópica: 44m-50.5m | Momento de carga: 1,991-5,000 kN.m | Contrapeso: hasta 32t",
          image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/qzqggRTEiAsovSup.jpg"
        }
      ]
    },
    {
      id: "perforacion",
      name: "Perforación",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/YOhRTWTQpuBycJEN.png",
      products: [
        {
          name: "Perforadora Rotativa XSL520",
          desc: "",
          image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/YOhRTWTQpuBycJEN.png"
        }
      ]
    },
    {
      id: "concreto",
      name: "Maquinaria de Concreto",
      subtitle: "Mixer Trucks, Bombas y Plantas Móviles",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/UCVdiRrKfxAPvoZQ.jpg",
      products: [
        {
          name: "Camión Mezclador XS308D",
          desc: "Capacidad: 8m³ | Chasis: XCMG | Motor: Cummins 380hp | Tecnología de mezclado homogéneo",
          image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/lILypSDXAtPlSvmj.png"
        },
        {
          name: "Planta Móvil XS0.75M",
          desc: "Salida: 40m³/h | Concreto: 0.75m³ | Potencia: 30kW | Agregados: 4x5m³",
          image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/raraosgDwHDJfQHe.jpg"
        },
        {
          name: "Planta Móvil XS1.0M",
          desc: "Salida: 60m³/h | Concreto: 1m³ | Potencia: 2x18.5kW | Agregados: 4x5m³",
          image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/hHWyMCIWjpQpwNAC.jpg"
        },
        {
          name: "Planta Móvil XS1.5M",
          desc: "Salida: 90m³/h | Concreto: 1.5m³ | Potencia: 2x30kW | Agregados: 4x8m³",
          image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/gZcZLAMjtwlYwQuI.jpg"
        },
        {
          name: "Bomba XS5008D",
          desc: "Salida: 50m³/h | Presión: 8Mpa | Carreras: 27 | Cilindro: 180/1400 | Potencia: 75kW",
          image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/XVSMAAbocxYCOKtD.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMWFFYVVzZVY1SlZNdlY2THFqVzY0eC9zYW5kYm94L3l4VEpNMnZPOXU0Vkw0TFFBdFVxa3ctaW1nLTRfMTc3MDQwNjQ3MjAwMF9uYTFmbl9lSE0xTURBNFpDMXdkVzF3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=WIAbBKBhMHCsAT1yg9JrAgiu4PhfXOMEahaz0Jnfe~8eNZxzIF6WASHZyEFbcxH4GCRcL18vorBzCZMfoxqX4cWMgtAPQjLfL~-a-4Yo2ynN08hX96qb3LrgRavjcTOT5qp5ODmM~~EhiKLNveVjGxQIOqsXZaCEGeQTiBpzAejMJQHSCS2Ii-D1XSbIm3xws9u6OE3CD7-exIgVhh1uoGf6K1uksFJEw9lrq0WAr~oPGJSVYd-VNQQEm~w0ArLgKuOlaKz9gS7M7Xa7U4mMmlNjQE~oB4MpvPgkS8nEHaSCvtawRkXlKgIURyw6hf79C1JgH08bpCyY9uyNYlXBuw__"
        },
        {
          name: "Bomba XS6013D",
          desc: "Salida: 65/40m³/h | Presión: 8/13Mpa | Carreras: 22/13 | Cilindro: 200/1600 | Potencia: 118kW",
          image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/cReateOZkdYBFfdF.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMWFFYVVzZVY1SlZNdlY2THFqVzY0eC9zYW5kYm94L3l4VEpNMnZPOXU0Vkw0TFFBdFVxa3ctaW1nLTVfMTc3MDQwNjQ4MTAwMF9uYTFmbl9lSE0yTURFelpDMXdkVzF3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ct-5034akx8h47pDYSNP1AF~HIJvS7~BikMJtgyRUjTeDshT2oYsOg60IS0uNxXdhNKfzfJ94NzGhec91qIRqRVX0z1yW4alc4lEmZQdN15x7uXXgX39~zn7jp1te3iwUmVJNV-Mlzivlb8aO9TvzrAhQkvlC3JQsyo0ZM-3EtEROyYDbV3M7llAGLnOEhR2bBKeM~OhzdU-tue00IN7v6RLHYR0SRoxnlsLdNCWjJq4tGbbVNwdy6c6VblRBTCvWHKAk7qQhFcO~O-urAG8wWLz7MzpymNXiyXBhSE9xXLPwTaj3jCdeRS4sfxzp5o1yVuh1lGInY3y2Kh0RPXgaw__"
        },
        {
          name: "Bomba XS9018D",
          desc: "Salida: 95/55m³/h | Presión: 10/18Mpa | Carreras: 25/14 | Cilindro: 230/1600 | Potencia: 206/199kW",
          image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/wEQZABnlpjEgqlol.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMWFFYVVzZVY1SlZNdlY2THFqVzY0eC9zYW5kYm94L29SS1lUNHgyN1kyQWpWNnFhR2dJZ2QtaW1nLTFfMTc3MDQwNjUzOTAwMF9uYTFmbl9lSE01TURFNFpDMXdkVzF3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=RqZ5UtzHdp1tCqZcVjx5syQyoDv7fH24xjiBvYzB9Ctasa2jU995yIHtEEIVJ6JuGQrn-BAFlheEvtzS1XNLS7R3HFUYxVnn6-ZEz~6Q~bn~vy6vFPV~bHisEZEGmiIoLntA~LRowJLHW78lF3F7cAmtfC6dyY~MGEaz9fNkpuuwsiqXOsFALoVEWLGTBv4tNesQUCrnn-nOPIp5zbTwVu8t2dJCuPFBC6Tx43FANXVLkpbmeN8YxyQV7P~xSThE69uLPdT4lSDGXCKRpg-SjjwpoA5AEICJSfLmmH4yM17knzRiIEvyyLmD5g4IiW-ihuMEAMvc0PYxHXANgewECg__"
        },
        {
          name: "Bomba XS10022D",
          desc: "Salida: 102/70m³/h | Presión: 15/22Mpa | Carreras: 25/17 | Cilindro: 200/2100 | Potencia: 338kW",
          image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/TQTUmnDtQKfhNuyW.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMWFFYVVzZVY1SlZNdlY2THFqVzY0eC9zYW5kYm94L29SS1lUNHgyN1kyQWpWNnFhR2dJZ2QtaW1nLTJfMTc3MDQwNjU0ODAwMF9uYTFmbl9lSE14TURBeU1tUXRjSFZ0Y0EuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=fGt1iEpDSjbPk0CCZFNPjEpDy36g2p-wuOOFhLFq2r97teUVboFnp61xqZvzDqS-XtvaOizRcugQP8oB1YyoTWdy0yN~pnlRLMKetxxDoRd5OfelVnA-AZqVLhSH0QXYXe0sdWu3E0yljkJgKmKzn-qs2ShVXZYSu3E4GiKOS5YhaMYzgfYk29pwmp2a5qhaAnKWGGKpP-m6euwrrHvClNr-EnCuuQ5McO~QIG-5kOmLup4CZR913BulJsnqPUtOnlQ3Fa20DLQlxs1XLHtVLEif3oT0LbeTupTxbi3Cel~AEygYvz23QVBE7txfLqRIL~REnRj6aJJM91kniMAmHQ__"
        }
      ]
    },
    {
      id: "plataformas",
      name: "Plataformas de Elevación",
      subtitle: "De Tijeras y Telescópicas",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/axdvffWrfXzaJtab.jpg",
      products: [
        {
          name: "Tijera Eléctrica XG1212AC",
          desc: "Altura Trabajo: 12m | Capacidad: 320kg | Tipo: Tijera Eléctrica | Cero emisiones",
          image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/jbCttumDScCvRDLh.jpg"
        },
        {
          name: "Brazo Telescópico XGS28",
          desc: "Altura Trabajo: 28m | Capacidad: 300/460kg | Tipo: Telescópica Diésel",
          image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/axdvffWrfXzaJtab.jpg"
        }
      ]
    },
    {
      id: "aditamentos",
      name: "Aditamentos",
      subtitle: "Accesorios",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/uAhizuMQlCGFbdem.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMWFFYVVzZVY1SlZNdlY2THFqVzY0eC9zYW5kYm94L0lnOGYySXp3NTZuQUt4c2xUak16aTUtaW1nLTJfMTc3MDQwNzM1MzAwMF9uYTFmbl9lR050WnkxNFpXSXhNelV0WW5KbFlXdGxjZy5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=n~Bj9nNVn517UJ7c8nn5jZGNNIYfZ98zetC1MOR~CnXv6b63q0LvHC0E1GQZ1rE07HQPa2NFUkGBhrBcYUmY0b~C3uSlsF-tn~RFnhYXwS6MYCBcAaIBSj3SqS64jAhmxznK24gE4QoXzBKhtJPuhSGimtDQTDsZQecQNa3aPQRdfJ5p0U1UoEv8XKY5AcJSLrlzLSYNZ8E4j1xBLq3NaHX-~liErWpJ5odLAeHmUunrL6zxpHOQWfo3MBmRlrmheyrii4jxIcVy6fOkWqbBFKHsRa57ivVFEzubz78-D8torii3SWa9IksjauKOep-JZnGp-USNhmwgueVNfeoQ1Q__",
      products: [
        {
          name: "Martillo Hidráulico XEB135",
          desc: "Aditamento para excavadoras",
          image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/uAhizuMQlCGFbdem.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMWFFYVVzZVY1SlZNdlY2THFqVzY0eC9zYW5kYm94L0lnOGYySXp3NTZuQUt4c2xUak16aTUtaW1nLTJfMTc3MDQwNzM1MzAwMF9uYTFmbl9lR050WnkxNFpXSXhNelV0WW5KbFlXdGxjZy5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=n~Bj9nNVn517UJ7c8nn5jZGNNIYfZ98zetC1MOR~CnXv6b63q0LvHC0E1GQZ1rE07HQPa2NFUkGBhrBcYUmY0b~C3uSlsF-tn~RFnhYXwS6MYCBcAaIBSj3SqS64jAhmxznK24gE4QoXzBKhtJPuhSGimtDQTDsZQecQNa3aPQRdfJ5p0U1UoEv8XKY5AcJSLrlzLSYNZ8E4j1xBLq3NaHX-~liErWpJ5odLAeHmUunrL6zxpHOQWfo3MBmRlrmheyrii4jxIcVy6fOkWqbBFKHsRa57ivVFEzubz78-D8torii3SWa9IksjauKOep-JZnGp-USNhmwgueVNfeoQ1Q__"
        },
        {
          name: "Martillo Hidráulico Compacto",
          desc: "Aditamento para mini excavadoras",
          image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/PNcADUWJuQbOxlfS.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMWFFYVVzZVY1SlZNdlY2THFqVzY0eC9zYW5kYm94L0lnOGYySXp3NTZuQUt4c2xUak16aTUtaW1nLTNfMTc3MDQwNzM3MjAwMF9uYTFmbl9lR050WnkxamIyMXdZV04wTFdKeVpXRnJaWEkuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ZBx1VRCFjlmZESr2wiNT4PA~K8365x4dn9nKA8twzgLjkJ6IoGu-IYFE43kgutuL8SApld7ngdgAYBaILJeD2lFwEeCA9PTj~BfywzPGfbKm4mdhdZAAJAPCZgh7euaqsAeKNhm0pDKoc66U3HdT3xowbgpQtX8HZN4KB1tKZ17xeTlPSRcLg~2UfaudCt9jVavOwbkRIbrLypGAdWK9jWOahiZ4h5TOJIU4cveJkwfJkdISn2OQjrzNd17Zumfeo3G9iOtoMtJmBVnBV4aPn6DIAJcsAYTGGqAKuth90pEOMBcR2N9t4NXppfnWhIM5JeW1knkru2yZ5suA0CZidg__"
        },
        {
          name: "Martillo Hidráulico XEB100",
          desc: "Aditamento para excavadoras medianas",
          image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/pKooOsySpwCETjDT.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMWFFYVVzZVY1SlZNdlY2THFqVzY0eC9zYW5kYm94L0lnOGYySXp3NTZuQUt4c2xUak16aTUtaW1nLTRfMTc3MDQwNzM0OTAwMF9uYTFmbl9lR050WnkxNFpXSXhNREF0WW5KbFlXdGxjZy5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Aw4DBiku6rpj4iwHQMMRjGBaYNh-M-CKYy4lZmtdZ8byuigkk0FIXwR08xb0TljZqOWyFP0QFkc5BlLnGyD-46eKh9enrYnQl9gVxKpTyQFV~6i~sk5GyF8lx7e3qN6nyitmWFWcwvt8EPg0a0sR4JK9LYjTc05Sba3j1Doza2uxSWd0NsoIdT5l47ZupS29iZ4Qe6qDNpVByW6jGSD4NrBroFyiv2WbMThKdin7zgcMcZMCQ~gudT0xNIpE3a8tAbsppN9T12aThk6zGYSA3S1xdrS-crbEyEeEsls9m3NwwLtJ7-faRuh8HwbkZV4-4lGARp0e2cwqXMCjaL4Zvg__"
        },
        {
          name: "Pulgar Hidráulico",
          desc: "Garra hidráulica para excavadoras",
          image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/VxmLyOgLTkruXuSd.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMWFFYVVzZVY1SlZNdlY2THFqVzY0eC9zYW5kYm94L0lnOGYySXp3NTZuQUt4c2xUak16aTUtaW1nLTVfMTc3MDQwNzM1OTAwMF9uYTFmbl9lR050Wnkxb2VXUnlZWFZzYVdNdGRHaDFiV0kuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Yf0kwGtgHu7G4PhkMSdcs4NXn7NeLL367XuBK3isnrG1joYSXV~oV3YSlU6xh~lFX7lJ~jA-CV1K7~dv1~M2VgHhQPcu7UqCd6DI-KGV-LozKHLKGcbYSxWWax6G1vFYGsJQWZiAdVULsIIUehQImEq7h5rtlsmphd9EknamtrGr60HmoJ4ldI5aFZdg~NkBkQFVXPVADM3RyUiFJc0k5w-96GPQJALg7R9h6TrIGqkPmSsKgcMoGgY47jpeGB8FmODkH9rRqF2ILvulQQIe78Pf8TFI19q9sXU2ZnjY6QZaMDBHP2ehiWEtuujiQMgogyrrJBQVv2wGZ97eE7crKw__"
        }
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden bg-zinc-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/xcmg-excavator-real.webp" 
            alt="Maquinaria de Construcción TopKe" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-zinc-900/50"></div>
        </div>

        <div className="container relative z-10 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="h-1 w-12 bg-primary"></span>
              <span className="text-primary font-bold uppercase tracking-widest text-sm">División Maquinaria</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-none mb-6 uppercase">
              Poder para <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">Construir el Futuro</span>
            </h1>
            <p className="text-xl text-zinc-300 max-w-2xl font-light">
              Representamos a las marcas líderes mundiales en maquinaria pesada, garantizando rendimiento, durabilidad y el mejor soporte post-venta del mercado.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats / Features */}
      <section className="py-12 bg-zinc-900 border-b border-zinc-800">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center p-4 border border-zinc-800 hover:border-primary transition-colors group">
            <Hammer className="text-zinc-500 group-hover:text-primary mb-3 w-8 h-8 transition-colors" />
            <span className="text-3xl font-bold text-white mb-1">XCMG</span>
            <span className="text-xs text-zinc-500 uppercase tracking-widest">Distribuidor Oficial</span>
          </div>
          <div className="flex flex-col items-center text-center p-4 border border-zinc-800 hover:border-primary transition-colors group">
            <Truck className="text-zinc-500 group-hover:text-primary mb-3 w-8 h-8 transition-colors" />
            <span className="text-3xl font-bold text-white mb-1">+500</span>
            <span className="text-xs text-zinc-500 uppercase tracking-widest">Equipos Vendidos</span>
          </div>
          <div className="flex flex-col items-center text-center p-4 border border-zinc-800 hover:border-primary transition-colors group">
            <HardHat className="text-zinc-500 group-hover:text-primary mb-3 w-8 h-8 transition-colors" />
            <span className="text-3xl font-bold text-white mb-1">24/7</span>
            <span className="text-xs text-zinc-500 uppercase tracking-widest">Soporte Técnico</span>
          </div>
          <div className="flex flex-col items-center text-center p-4 border border-zinc-800 hover:border-primary transition-colors group">
            <Ruler className="text-zinc-500 group-hover:text-primary mb-3 w-8 h-8 transition-colors" />
            <span className="text-3xl font-bold text-white mb-1">100%</span>
            <span className="text-xs text-zinc-500 uppercase tracking-widest">Garantía TopKe</span>
          </div>
        </div>
      </section>

      {/* Product Catalog */}
      <section className="py-24 bg-zinc-50 min-h-screen">
        <div className="container">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-display font-bold text-zinc-900 mb-4 uppercase">Catálogo de Maquinaria</h2>
            <div className="h-1 w-24 bg-primary mx-auto mb-6"></div>
            <p className="text-zinc-500">
              Seleccione una categoría para ver nuestros equipos disponibles.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {!selectedCategory ? (
              // Vista de Categorías
              <motion.div 
                key="categories"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {categories.map((category, index) => (
                  <motion.div 
                    key={category.id}
                    whileHover={{ y: -10 }}
                    className="group bg-white border border-zinc-200 cursor-pointer overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                    onClick={() => setSelectedCategory(category)}
                  >
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10"></div>
                      <img 
                        src={category.image} 
                        alt={category.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-20">
                        <h3 className="text-2xl font-bold text-white mb-1">{category.name}</h3>
                        {category.subtitle && (
                          <p className="text-zinc-300 text-sm font-light">{category.subtitle}</p>
                        )}
                        <div className="flex items-center text-primary text-sm font-medium mt-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                          Ver Equipos <ArrowRight className="ml-2 w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              // Vista de Productos de la Categoría Seleccionada
              <motion.div 
                key="products"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-8 flex items-center">
                  <Button 
                    variant="ghost" 
                    onClick={() => setSelectedCategory(null)}
                    className="group text-zinc-500 hover:text-primary pl-0"
                  >
                    <ChevronRight className="mr-2 w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
                    Volver a Categorías
                  </Button>
                  <div className="h-6 w-px bg-zinc-300 mx-4"></div>
                  <h3 className="text-2xl font-bold text-zinc-900">{selectedCategory.name}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {selectedCategory.products.map((product, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white border border-zinc-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
                    >
                      <div className="aspect-video overflow-hidden relative bg-zinc-100">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-8 flex flex-col flex-grow">
                        <h4 className="text-2xl font-bold text-zinc-900 mb-4">{product.name}</h4>
                        
                        {/* Renderizado de descripción como lista vertical */}
                        <div className="space-y-3 mb-8 flex-grow">
                          {product.desc.split('|').map((item, i) => (
                            <div key={i} className="flex items-start">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-zinc-600 font-light">{item.trim()}</span>
                            </div>
                          ))}
                        </div>

                        <Button 
                          className="w-full bg-zinc-900 hover:bg-primary text-white hover:text-white transition-colors mt-auto"
                          onClick={() => window.open('https://wa.me/50222248080?text=Hola,%20quisiera%20solicitar%20una%20cotizaci%C3%B3n', '_blank')}
                        >
                          Solicitar Cotización
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </Layout>
  );
}
