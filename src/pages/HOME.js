import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import GroupComponent3 from "../components/GroupComponent3";
import GroupComponent2 from "../components/GroupComponent2";
import GroupComponent1 from "../components/GroupComponent1";
import Component from "../components/Component";
import GroupComponent from "../components/GroupComponent";
import styles from "./HOME.module.css";

const HOME = () => {
  const navigate = useNavigate();

  const onSearchCircleStreamlineUltiClick = useCallback(() => {
    navigate("/search");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/categories-within-form");
  }, [navigate]);

  return (
    <div className={styles.home}>
      <div className={styles.groupParent}>
        <img className={styles.groupChild} alt="" src="/group-24@2x.png" />
        <img className={styles.groupItem} alt="" src="/group-25@2x.png" />
      </div>
      <img
        className={styles.searchCircleStreamlineUltiIcon}
        alt=""
        src="/searchcirclestreamlineultimatesvg.svg"
        onClick={onSearchCircleStreamlineUltiClick}
      />
      <img
        className={styles.shoppingCartSvgrepoCom1Icon}
        alt=""
        src="/shoppingcartsvgrepocom-1.svg"
      />
      <img className={styles.homeChild} alt="" src="/rectangle-37@2x.png" />
      <img className={styles.homeItem} alt="" src="/rectangle-38@2x.png" />
      <img
        className={styles.brandSeparatorIcon}
        alt=""
        src="/rectangle-36@2x.png"
      />
      <img
        className={styles.locationPinSvgrepoCom1Icon}
        alt=""
        src="/locationpinsvgrepocom-1.svg"
      />
      <div className={styles.ajmanUae}>Ajman, UAE</div>
      <img
        className={styles.downChevronSvgrepoCom1Icon}
        alt=""
        src="/downchevronsvgrepocom-1.svg"
      />
      <div className={styles.tripleDots} />
      <div className={styles.tripleDots1} />
      <div className={styles.tripleDots2} />
      <div className={styles.homeInner} />
      <div className={styles.productTag} />
      <div className={styles.trendingProducts}>Trending Products</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.rectangleParent}>
        <div className={styles.groupInner} />
        <div className={styles.productTag1} />
        <div className={styles.todaysSpecialOffer}>Today’s Special Offer</div>
        <img
          className={styles.rightCircleSvgrepoCom3Icon}
          alt=""
          src="/rightcirclesvgrepocom-3.svg"
        />
        <GroupComponent3 />
        <GroupComponent3 propLeft="183px" propMinWidth="30px" />
        <GroupComponent3 propLeft="349px" propMinWidth="unset" />
      </div>
      <div className={styles.homeChild1} />
      <div className={styles.homeChild2} />
      <div className={styles.rectangleGroup}>
        <div className={styles.groupChild1} />
        <div className={styles.div}>-30%</div>
      </div>
      <GroupComponent2 />
      <div className={styles.homeChild3} />
      <div className={styles.cementBagsParent}>
        <div className={styles.cementBags}>Cement Bags</div>
        <div className={styles.kg}>25 KG</div>
      </div>
      <div className={styles.div1}>$ 2.50</div>
      <div className={styles.homeChild4} />
      <div className={styles.div2}>-30%</div>
      <img
        className={styles.addSquareSvgrepoCom2Icon}
        alt=""
        src="/addsquaresvgrepocom-2.svg"
      />
      <div className={styles.homeChild5} />
      <div className={styles.cementBagsGroup}>
        <div className={styles.cementBags1}>Cement Bags</div>
        <div className={styles.kg1}>50 KG</div>
      </div>
      <div className={styles.div3}>$ 4.50</div>
      <div className={styles.homeChild6} />
      <div className={styles.div4}>-30%</div>
      <img
        className={styles.addSquareSvgrepoCom4Icon}
        alt=""
        src="/addsquaresvgrepocom-2.svg"
      />
      <div className={styles.rectangleContainer}>
        <div className={styles.groupChild2} />
        <div className={styles.aacBlocksParent}>
          <div className={styles.aacBlocks}>AAC Blocks</div>
          <div className={styles.x100X}>200 x 100 x 150</div>
        </div>
        <div className={styles.div5}>$ 1.50</div>
        <div className={styles.groupChild3} />
        <div className={styles.div6}>-25%</div>
        <div className={styles.groupChild4} />
        <div className={styles.productName}>-25%</div>
        <img
          className={styles.addSquareSvgrepoCom3Icon}
          alt=""
          src="/addsquaresvgrepocom-2.svg"
        />
        <div className={styles.wrapperImage202305241255152}>
          <img
            className={styles.image202305241255152RemovebIcon}
            alt=""
            src="/image202305241255152removebgpreview-1@2x.png"
          />
        </div>
      </div>
      <div className={styles.wrapperIstockphoto476199756}>
        <img
          className={styles.istockphoto476199756612x612Icon}
          alt=""
          src="/istockphoto476199756612x612removebgpreview-2@2x.png"
        />
      </div>
      <img
        className={styles.rightCircleSvgrepoCom1Icon}
        alt=""
        src="/rightcirclesvgrepocom-1.svg"
      />
      <div className={styles.groupDiv}>
        <div className={styles.groupChild5} />
        <div className={styles.tmtSteelBarsWrapper}>
          <div className={styles.tmtSteelBars}>TMT Steel Bars</div>
        </div>
        <div className={styles.startingFromWrapper}>
          <div className={styles.startingFrom}>Starting from</div>
        </div>
        <div className={styles.fe550Grade}>Fe 550 Grade</div>
        <div className={styles.priceValue}>$ 6.70</div>
        <div className={styles.wrapperOgunSteelBar500x500}>
          <img
            className={styles.ogunSteelBar500x5001RemovIcon}
            alt=""
            src="/ogunsteelbar500x5001removebgpreview-1@2x.png"
          />
        </div>
      </div>
      <div className={styles.homeChild7} />
      <div className={styles.interlocksWrapper}>
        <div className={styles.interlocks}>Interlocks</div>
      </div>
      <div className={styles.startingFromContainer}>
        <div className={styles.startingFrom1}>Starting from</div>
      </div>
      <div className={styles.multiColor}>Multi-Color</div>
      <div className={styles.currency}>$ 1.30</div>
      <div className={styles.wrapperHighStrengthRedInte}>
        <img
          className={styles.highStrengthRedInterlockingIcon}
          alt=""
          src="/highstrengthredinterlockingpaverblocks519removebgpreview-1@2x.png"
        />
      </div>
      <img
        className={styles.rightCircleSvgrepoCom4Icon}
        alt=""
        src="/rightcirclesvgrepocom-4.svg"
      />
      <div className={styles.todaysBulkDeals}>Today’s Bulk Deals</div>
      <div className={styles.fastMovingItems}>Fast Moving Items</div>
      <GroupComponent1 />
      <GroupComponent1 propTop="2045px" />
      <GroupComponent1 propTop="2249px" />
      <div className={styles.trendingBrands}>Trending Brands</div>
      <div className={styles.whiteWood}>White-wood</div>
      <div className={styles.cementSandContainer}>
        <p className={styles.cement}>{`Cement &`}</p>
        <p className={styles.sand}>Sand</p>
      </div>
      <div className={styles.landscape}>Landscape</div>
      <div className={styles.drywallGypsumContainer}>
        <p className={styles.drywall}>{`Drywall &`}</p>
        <p className={styles.gypsum}>Gypsum</p>
      </div>
      <div className={styles.precast}>Precast</div>
      <div className={styles.steelSpacersScaffoldingContainer}>
        <p className={styles.steelSpacers}>Steel, Spacers</p>
        <p className={styles.scaffolding}>Scaffolding</p>
      </div>
      <div className={styles.constructionChemicals}>
        <p className={styles.construction}>Construction</p>
        <p className={styles.chemicals}>Chemicals</p>
      </div>
      <div className={styles.concreteReady}>
        <p className={styles.concrete}>{`Concrete `}</p>
        <p className={styles.ready}>Ready</p>
      </div>
      <div className={styles.masonry}>Masonry</div>
      <div className={styles.ajGoods}>{`A&J Goods`}</div>
      <div className={styles.bbSuppliers}>{`B&B Suppliers`}</div>
      <div className={styles.steelsCo}>{`Steels & co.`}</div>
      <div className={styles.buildnmix}>BuildNmix</div>
      <div className={styles.rectangleParent1} onClick={onGroupContainerClick}>
        <div className={styles.groupChild6} />
        <img
          className={styles.brickwork1Icon}
          alt=""
          src="/brickwork-1@2x.png"
        />
      </div>
      <div className={styles.plasterMortar}>{`Plaster & mortar`}</div>
      <div className={styles.groupContainer}>
        <div className={styles.rectangleWrapper}>
          <div className={styles.groupChild7} />
        </div>
        <img className={styles.oil1Icon} alt="" src="/oil-1@2x.png" />
      </div>
      <div className={styles.groupParent1}>
        <div className={styles.rectangleFrame}>
          <div className={styles.groupChild8} />
        </div>
        <img className={styles.concrete1Icon} alt="" src="/concrete-1@2x.png" />
      </div>
      <div className={styles.groupParent2}>
        <div className={styles.rectangleWrapper1}>
          <div className={styles.groupChild9} />
        </div>
        <img
          className={styles.concreteMixer1Icon}
          alt=""
          src="/concretemixer-1@2x.png"
        />
      </div>
      <div className={styles.groupParent3}>
        <div className={styles.rectangleWrapper2}>
          <div className={styles.groupChild10} />
        </div>
        <img className={styles.steel1Icon} alt="" src="/steel-1@2x.png" />
      </div>
      <div className={styles.groupParent4}>
        <div className={styles.rectangleWrapper3}>
          <div className={styles.groupChild11} />
        </div>
        <img
          className={styles.plastering1Icon}
          alt=""
          src="/plastering-1@2x.png"
        />
      </div>
      <div className={styles.groupParent5}>
        <div className={styles.rectangleWrapper4}>
          <div className={styles.groupChild12} />
        </div>
        <img className={styles.planning1Icon} alt="" src="/planning-1@2x.png" />
      </div>
      <div className={styles.groupParent6}>
        <div className={styles.rectangleWrapper5}>
          <div className={styles.groupChild13} />
        </div>
        <img className={styles.drywall1Icon} alt="" src="/drywall-1@2x.png" />
      </div>
      <div className={styles.rectangleParent2}>
        <div className={styles.groupChild14} />
        <img className={styles.cement1Icon} alt="" src="/cement-1@2x.png" />
      </div>
      <div className={styles.rectangleParent3}>
        <div className={styles.groupChild15} />
        <img className={styles.parquet1Icon} alt="" src="/parquet-1@2x.png" />
      </div>
      <div className={styles.nearestSuppliers}>Nearest Suppliers</div>
      <img className={styles.ellipseIcon} alt="" src="/ellipse-31@2x.png" />
      <img className={styles.homeChild8} alt="" src="/ellipse-32@2x.png" />
      <img className={styles.homeChild9} alt="" src="/ellipse-33@2x.png" />
      <img className={styles.homeChild10} alt="" src="/ellipse-34@2x.png" />
      <div className={styles.brandName}>Brand name</div>
      <img className={styles.blockImageIcon} alt="" src="/block-image@2x.png" />
      <div className={styles.brandName1}>Brand name</div>
      <img className={styles.homeChild11} alt="" src="/block-image@2x.png" />
      <div className={styles.brandName2}>Brand name</div>
      <img className={styles.homeChild12} alt="" src="/block-image@2x.png" />
      <div className={styles.brandName3}>Brand name</div>
      <img className={styles.homeChild13} alt="" src="/block-image@2x.png" />
      <div className={styles.brandName4}>Brand name</div>
      <img className={styles.homeChild14} alt="" src="/block-image@2x.png" />
      <img
        className={styles.rectangleIcon}
        alt=""
        src="/rectangle-111@2x.png"
      />
      <div className={styles.groupParent7}>
        <img className={styles.groupIcon} alt="" src="/group-24@2x.png" />
        <img className={styles.groupChild16} alt="" src="/group-25@2x.png" />
      </div>
      <div className={styles.bannerShapeParent}>
        <img
          className={styles.bannerShapeIcon}
          alt=""
          src="/banner-shape@2x.png"
        />
        <img
          className={styles.bannerShapeIcon1}
          alt=""
          src="/banner-shape@2x.png"
        />
        <div className={styles.hireYour}>Hire your</div>
        <div className={styles.pickUp}>Pick-up</div>
        <div className={styles.groupChild17} />
        <div className={styles.hireNow}>Hire Now</div>
      </div>
      <div className={styles.homeChild15} />
      <Component />
      <GroupComponent />
    </div>
  );
};

export default HOME;
