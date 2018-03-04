<template>
    <div class="sprite-list">
            <sprite-card v-for="sprite in filteredSprites"
                         :key="sprite.uuid"
                         :class="{'sprite-list__item': true}"
                         :name="sprite.name"
                         :uuid="sprite.uuid"
                         :source="sprite.preview">

            </sprite-card>

        <sprite-card name="sample item" class="sprite-list__item" >item 1</sprite-card>
        <sprite-card name="sample item" class="sprite-list__item" >item 2</sprite-card>
        <sprite-card name="sample item" class="sprite-list__item sprite-list__item--colspan-3" >item 3</sprite-card>
        <sprite-card name="sample item" class="sprite-list__item" >item 4</sprite-card>
        <sprite-card name="sample item" class="sprite-list__item sprite-list__item--colspan-2 sprite-list__item--rowspan-3" >item 5</sprite-card>
        <sprite-card name="sample item" class="sprite-list__item" >item 6</sprite-card>
        <sprite-card name="sample item" class="sprite-list__item" >item 7</sprite-card>
        <sprite-card name="sample item" class="sprite-list__item" >item 8</sprite-card>
        <sprite-card name="sample item" class="sprite-list__item" >item 9</sprite-card>
        <sprite-card name="sample item" class="sprite-list__item sprite-list__item--colspan-2" >item 10</sprite-card>
        <sprite-card name="sample item" class="sprite-list__item" >item 11</sprite-card>
        <sprite-card name="sample item" class="sprite-list__item" >item 12</sprite-card>
        <sprite-card name="sample item" class="sprite-list__item sprite-list__item--span-2" >item 13</sprite-card>
        <sprite-card name="sample item" class="sprite-list__item" >item 14</sprite-card>
        <sprite-card name="sample item" class="sprite-list__item" >item 15</sprite-card>

        <!--<aside class="sprite-list__item sprite-list__aside sprite-list__item&#45;&#45;colspan-6 sprite-list__item&#45;&#45;rowspan-3">-->
            <!--<div class="sprite-list__text">-->
                <!--<h1>Text here</h1>-->
                <!--<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in augue euismod, ullamcorper diam vitae, dapibus leo. Aliquam erat volutpat. Sed elementum finibus malesuada. Quisque eget gravida dui, et interdum.</p>-->
            <!--</div>-->
        <!--</aside>-->

        <sprite-card name="sample item" class="sprite-list__item" >item 16</sprite-card>
        <sprite-card name="sample item" class="sprite-list__item sprite-list__item--colspan-3" >item 17</sprite-card>
        <sprite-card name="sample item" class="sprite-list__item" >item 18</sprite-card>
        <sprite-card name="sample item" class="sprite-list__item" >item 19</sprite-card>
        <sprite-card name="sample item" class="sprite-list__item" >item 20</sprite-card>
        <sprite-card name="sample item" class="sprite-list__item sprite-list__item--colspan-2" >item 21</sprite-card>
        <sprite-card name="sample item" class="sprite-list__item" >item 22</sprite-card>
        <sprite-card name="sample item" class="sprite-list__item" >item 23</sprite-card>
        <sprite-card name="sample item" class="sprite-list__item" >item 24</sprite-card>
        <sprite-card name="sample item" class="sprite-list__item" >item 25</sprite-card>
        <sprite-card name="sample item" class="sprite-list__item sprite-list__item--colspan-3" >item 26</sprite-card>
        <sprite-card name="sample item" class="sprite-list__item" >item 27</sprite-card>
        <sprite-card name="sample item" class="sprite-list__item" >item 28</sprite-card>
        <sprite-card name="sample item" class="sprite-list__item" >item 29</sprite-card>
        <sprite-card name="sample item" class="sprite-list__item" >item 30</sprite-card>
        <sprite-card name="sample item" class="sprite-list__item" >item 31</sprite-card>
        <sprite-card name="sample item" class="sprite-list__item" >item 32</sprite-card>
        <sprite-card name="sample item" class="sprite-list__item" >item 33</sprite-card>
        <sprite-card name="sample item" class="sprite-list__item" >item 34</sprite-card>
        <sprite-card name="sample item" class="sprite-list__item" >item 35</sprite-card>
        <sprite-card name="sample item" class="sprite-list__item" >item 36</sprite-card>
        <sprite-card name="sample item" class="sprite-list__item" >item 37</sprite-card>
        <sprite-card name="sample item" class="sprite-list__item" >item 38</sprite-card>
        <sprite-card name="sample item" class="sprite-list__item" >item 39</sprite-card>
        <sprite-card name="sample item" class="sprite-list__item sprite-list__item--colspan-3" >item 40</sprite-card>
        <sprite-card name="sample item" class="sprite-list__item" >item 41</sprite-card>
        <sprite-card name="sample item" class="sprite-list__item" >item 42</sprite-card>
        <sprite-card name="sample item" class="sprite-list__item" >item 43</sprite-card>
        <sprite-card name="sample item" class="sprite-list__item" >item 44</sprite-card>
        <sprite-card name="sample item" class="sprite-list__item sprite-list__item--colspan-3" >item 45</sprite-card>
        <sprite-card name="sample item" class="sprite-list__item" >item 46</sprite-card>
        <sprite-card name="sample item" class="sprite-list__item" >item 47</sprite-card>
        <sprite-card name="sample item" class="sprite-list__item" >item 48</sprite-card>
        <sprite-card name="sample item" class="sprite-list__item" >item 49</sprite-card>
        <sprite-card name="sample item" class="sprite-list__item" >item 50</sprite-card>
    </div>
</template>

<script lang="ts" src="./sprite-list.ts"></script>
<style lang="scss" src="./sprite-list.scss"></style>
